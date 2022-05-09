import { auth, db } from "../firebase/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getFromGitHub,
  doesExist,
  getUser,
  notifyUserLogin,
} from "../helper-functions";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const authenticateWithGitHub = async () => {
    try {
      const res = await signInWithPopup(auth, new GithubAuthProvider());
      setUserData(res);
      navigate("/listing/projects");
      notifyUserLogin();
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async (notifyError) => {
      try {
        if (userData) {
          const authenticatedUser = await getFromGitHub(
            userData.user.providerData[0].uid,
            userData
          );
          const userExists = await doesExist(authenticatedUser);
          if (!userExists) {
            const userRef = collection(db, "users");
            await setDoc(doc(userRef, authenticatedUser.uid), {
              ...authenticatedUser,
              isOpenForCollab: false,
              projects: [],
            });
            setCurrentUser({
              ...authenticatedUser,
              isOpenForCollab: false,
              projects: [],
            });
          } else {
            await getUser(authenticatedUser.uid, setCurrentUser);
          }
        }
      } catch (error) {
        console.log(error);
        notifyError();
      }
    })();
    // eslint-disable-next-line
  }, [userData]);

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, authenticateWithGitHub, getUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
