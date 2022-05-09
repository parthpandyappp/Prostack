import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { actionTypes } from "../reducers";

const { SET_COLLAB_USER_LIST, SET_PROJECTS_LIST } = actionTypes;

const getCollabUserList = async (dataDispatch) => {
  try {
    const userRef = collection(db, "users");
    const q = query(userRef, where("isOpenForCollab", "==", true));
    const querySnapshot = await getDocs(q);
    const collabList = querySnapshot.docs.map((snap) => snap.data());
    dataDispatch({
      type: SET_COLLAB_USER_LIST,
      payload: { collabList: collabList },
    });
  } catch (error) {
    alert(error.response);
  }
};

const getProjects = async (dataDispatch) => {
  try {
    const userRef = collection(db, "users");
    const querySnapshot = await getDocs(userRef);
    const userList = querySnapshot.docs.map((snap) => snap.data());
    const projectList = userList.map((user) => user.projects).flat(1);
    dataDispatch({
      type: SET_PROJECTS_LIST,
      payload: { projectList },
    });
  } catch (error) {
    alert(error.response);
  }
};

export { getCollabUserList, getProjects };
