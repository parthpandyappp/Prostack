import axios from "axios";
import { auth, db } from "../firebase/firebase";
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const authContext = createContext(null);

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const authenticateWithGitHub = async () => {
    const res = await signInWithPopup(auth, new GithubAuthProvider());
    setUserData(res);
    navigate("/listing/projects");
    return res;
  };

  const getFromGitHub = async (uid) => {
    const res = await axios({
      method: "GET",
      url: `https://api.github.com/user/${uid}`,
    });

    return {
      uid: userData.user.providerData[0].uid,
      displayName: res.data.name,
      username: res.data.login,
      bio: res.data.bio,
      blog: res.data.blog,
      twitter: res.data.twitter_username,
      avatar: res.data.avatar_url,
      email: userData.user.email,
      timestamp: serverTimestamp(),
    };
  };

  const getUserDataFromFireStore = async () => {
    const res = await getDocs(collection(db, "users"));
    return res;
  };

  const doesExist = async (currentUser) => {
    const querySnapshot = await getUserDataFromFireStore();
    const data = querySnapshot.docs.map((snap) => snap.data());
    return data.find((user) => user.currentUser.uid === currentUser.uid);
  };

  useEffect(() => {
    (async () => {
      if (userData) {
        const authenticatedUser = await getFromGitHub(
          userData.user.providerData[0].uid
        );
        setCurrentUser({ ...authenticatedUser, isOpenForCollab: false });
        const userExists = await doesExist(authenticatedUser);
        if (!userExists)
          addDoc(collection(db, "users"), {
            ...authenticatedUser,
            isOpenForCollab: false,
          });
      }
    })();
    // eslint-disable-next-line
  }, [userData]);

  return (
    <authContext.Provider value={{ currentUser, authenticateWithGitHub }}>
      {children}
    </authContext.Provider>
  );
}

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
