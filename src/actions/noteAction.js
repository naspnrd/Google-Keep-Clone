import {
  UPDATE_ALL_NOTES,
  ADD_NEW_NOTE,
  UPDATE_NOTE,
  REMOVE_NOTE,
  TOGGLE_NOTE,
  UPDATE_ALL_AS_ARCHIVE
} from '../constants/ActionTypes';

import API from '../utils/apiCaller';

export const getAllNotes = () => {
  return dispatch => {
    API.getAll().then(notes => {
      dispatch({
        type: UPDATE_ALL_NOTES,
        notes
      });
    });
  };
};

export const addNewNote = (
  title,
  body,
  image = '',
  backgroundColor = 'inherit',
  isStarred = false,
  isArchived = false
) => {
  const note = {
    isStarred,
    isArchived,
    title,
    body,
    image,
    backgroundColor
  };

  return dispatch => {
    API.add(note).then(note => {
      dispatch({
        type: ADD_NEW_NOTE,
        note
      });
    });
  };
};

export const updateNote = note => {
  return (dispatch, getState) => {
    API.update(note).then(() => {
      dispatch({
        type: UPDATE_NOTE,
        note
      });
    });
  };
};

export const starNote = note => {
  const updatedNote = { ...note, isStarred: !note.isStarred };
  return (dispatch, getState) => {
    API.update(updatedNote).then(() => {
      dispatch({
        type: TOGGLE_NOTE,
        note: updatedNote
      });
    });
  };
};

export const toggleNote = note => {
  const updatedNote = { ...note, isArchived: !note.isArchived };
  return (dispatch, getState) => {
    API.update(updatedNote).then(() => {
      dispatch({
        type: TOGGLE_NOTE,
        note: updatedNote
      });
    });
  };
};

export const removeNote = note => {
  return dispatch => {
    API.delete(note).then(() => {
      dispatch({
        type: REMOVE_NOTE,
        id: note.id
      });
    });
  };
};

export const updateAllAsArchive = () => {
  return dispatch => {
    API.updateAllAsArchive().then(() => {
      dispatch({
        type: UPDATE_ALL_AS_ARCHIVE
      });
    });
  };
};
