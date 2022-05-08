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

const authContext = createContext(null);

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const signin = async () => {
    const res = await signInWithPopup(auth, new GithubAuthProvider());
    setUserData(res);
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
    // const docRef = doc(db, "users");
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
        const currentUser = await getFromGitHub(
          userData.user.providerData[0].uid
        );
        setCurrentUser(currentUser);
        const exist = await doesExist(currentUser);
        if (!exist)
          addDoc(collection(db, "users"), {
            currentUser,
          });
      }
    })();
    // eslint-disable-next-line
  }, [userData]);

  return (
    <authContext.Provider value={{ currentUser, signin }}>
      {children}
    </authContext.Provider>
  );
}

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
