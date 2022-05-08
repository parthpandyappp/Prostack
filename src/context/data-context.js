import { collection, getDocs, query, where } from "firebase/firestore";
import { createContext, useContext, useEffect, useReducer } from "react";
import { db } from "../firebase/firebase";
import { actionTypes, dataReducer } from "../reducers";
import { useAuth } from "./auth-context";

const DataContext = createContext(null);

const { SET_COLLAB_USER_LIST, SET_PROJECTS_LIST } = actionTypes;

export const DataProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [dataState, dataDispatch] = useReducer(dataReducer, {
    projects: [],
    collabUserList: [],
  });

  const getCollabUserList = async () => {
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

  const getProjects = async () => {
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

  useEffect(() => {
    if (currentUser) {
      getCollabUserList();
      getProjects();
    }
  }, [currentUser]);

  return (
    <DataContext.Provider value={{ dataState, dataDispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
