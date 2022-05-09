import { db, auth } from "../firebase/firebase";
import axios from "axios";
import {
  collection,
  getDocs,
  serverTimestamp,
  doc,
  getDoc,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { actionTypes } from "../reducers";

const { CLEAR_DATA } = actionTypes;

const getFromGitHub = async (uid, userData, notifyError) => {
  try {
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
  } catch (error) {
    console.log(error);
    notifyError();
  }
};

const getUserDataFromFireStore = async (notifyError) => {
  try {
    const res = await getDocs(collection(db, "users"));
    return res;
  } catch (error) {
    console.log(error);
    notifyError();
  }
};

const doesExist = async (currentUser, notifyError) => {
  try {
    const querySnapshot = await getUserDataFromFireStore();
    const data = querySnapshot.docs.map((snap) => snap.data());
    return data.find((user) => user.uid === currentUser.uid);
  } catch (error) {
    console.log(error);
    notifyError();
  }
};

const getUser = async (uid, setCurrentUser, notifyError) => {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setCurrentUser(docSnap.data());
    }
  } catch (error) {
    console.log(error);
    notifyError();
  }
};

const signoutHandler = (dataDispatch, notifySuccess, navigate, notifyError) => {
  signOut(auth)
    .then(() => {
      dataDispatch({ type: CLEAR_DATA });
      notifySuccess();
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
      notifyError();
    });
};

export {
  getFromGitHub,
  getUserDataFromFireStore,
  doesExist,
  getUser,
  signoutHandler,
};
