import { UPDATE_NOTE_TITLE_FILTER } from "../constants/ActionTypes";

const noteTitleFilterReducer = (state = { noteTitleFilter: "" }, action) => {
  if (action.type === UPDATE_NOTE_TITLE_FILTER) {
    return { ...state, noteTitleFilter: action.text };
  }

  return state;
};

export default noteTitleFilterReducer;
