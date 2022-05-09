import { db } from "../firebase/firebase";
import axios from "axios";
import {
  collection,
  getDocs,
  serverTimestamp,
  doc,
  getDoc,
} from "firebase/firestore";

const getFromGitHub = async (uid, userData) => {
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
  }
};

const getUserDataFromFireStore = async () => {
  try {
    const res = await getDocs(collection(db, "users"));
    return res;
  } catch (error) {
    console.log(error);
  }
};

const doesExist = async (currentUser) => {
  try {
    const querySnapshot = await getUserDataFromFireStore();
    const data = querySnapshot.docs.map((snap) => snap.data());
    return data.find((user) => user.uid === currentUser.uid);
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (uid, setCurrentUser) => {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setCurrentUser(docSnap.data());
    }
  } catch (error) {
    console.log(error);
  }
};

export { getFromGitHub, getUserDataFromFireStore, doesExist, getUser };
