import { actionTypes } from "./actionTypes";

const { SET_COLLAB_USER_LIST } = actionTypes;

export const dataReducer = (state, action) => {
  switch (action.type) {
    case SET_COLLAB_USER_LIST:
      return { ...state, collabUserList: [] };
    default:
      return state;
  }
};
