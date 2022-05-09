import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { dataReducer } from "../reducers";
import { useAuth } from "./auth-context";
import { getCollabUserList, getProjects } from "../helper-functions";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const [dataState, dataDispatch] = useReducer(dataReducer, {
    projects: [],
    collabUserList: [],
  });

  const [isDataUpdated, setIsDataUpdated] = useState(false);

  useEffect(() => {
    if (currentUser) {
      getCollabUserList(dataDispatch);
      getProjects(dataDispatch);
    }
  }, [currentUser, isDataUpdated]);

  return (
    <DataContext.Provider value={{ dataState, dataDispatch, setIsDataUpdated }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
