import React, { useState } from 'react';
import './MainDisplay.css';
import NotesContainer from '../containers/NotesContainer';
import ArchivedNotesContainer from '../containers/ArchivedNotesContainer';
import NewNote from '../components/NewNote';
import { DEFAULT_STATE } from '../constants/DefaultStates';

const MainDisplay = ({ selctedIndex, addNewNote }) => {
  const [isFocussed, setFocus] = useState(false);
  const [noteState, setNoteState] = useState(DEFAULT_STATE);

  const onSave = () => {
    let {
      title,
      body,
      isStarred,
      isArchived,
      backgroundColor,
      image
    } = noteState;
    if (title !== '' || body !== '') {
      addNewNote(title, body, image, backgroundColor, isStarred, isArchived);
      setNoteState(DEFAULT_STATE);
    }
    setFocus(false);
  };

  const renderContainer = () => {
    switch (selctedIndex) {
      case 0:
        return <NotesContainer />;
      case 1:
        return <ArchivedNotesContainer />;
      default:
        return null;
    }
  };

  return (
    <main className="main" onClick={onSave}>
      {selctedIndex === 0 && (
        <div className="note-add-container">
          <NewNote
            isFocussed={isFocussed}
            setFocus={setFocus}
            noteState={noteState}
            setNoteState={setNoteState}
            onSave={onSave}
          />
        </div>
      )}
      <div className="notes-container">{renderContainer()}</div>
    </main>
  );
};

export default MainDisplay;
