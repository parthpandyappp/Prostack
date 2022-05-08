import { actionTypes } from "./actionTypes";

const { SET_COLLAB_USER_LIST, SET_PROJECTS_LIST, CLEAR_DATA } = actionTypes;

export const dataReducer = (state, action) => {
  switch (action.type) {
    case SET_COLLAB_USER_LIST:
      return { ...state, collabUserList: action.payload.collabList };
    case SET_PROJECTS_LIST:
      return { ...state, projects: action.payload.projectList };
    case CLEAR_DATA:
      return { ...state, projects: [], collabUserList: [] };
    default:
      return state;
  }
};
