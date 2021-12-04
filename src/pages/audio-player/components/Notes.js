import { useRef, useState } from "react";
import { useGlobalContext } from "../../../ContextAPI";

const Notes = ({ wavesurfer }) => {
  //hooks

  const [currentNote, setCurrentNote] = useState("");
  const [currentTimestamp, setCurrentTimestapm] = useState("00:00");
  const textareaRef = useRef(null);
  const { convertSecondsToMinutes, notesArray, setNotesArray } =
    useGlobalContext();
  //handlers
  const handleTextareaFocus = () => {
    const timeInMin = convertSecondsToMinutes(wavesurfer.getCurrentTime());
    setCurrentTimestapm(timeInMin);
  };
  const handleAddBtnClick = () => {
    if (currentNote.length === 0) return;
    const newObj = {
      timestamp: currentTimestamp,
      note: currentNote,
    };
    const newArray = [...notesArray, newObj];
    newArray.sort((a, b) => a.timestamp.localeCompare(b.timestamp));
    setNotesArray(newArray);
    setCurrentNote("");
    setCurrentTimestapm("00:00");
  };

  return (
    <div className="audio-player__notes">
      <div className="notes__saved-notes">
        {notesArray.map((item) => {
          const { timestamp, note } = item;
          return (
            <div
              className="saved-notes__note"
              key={timestamp}
              data-timestamp={timestamp}
            >
              {note}
            </div>
          );
        })}
      </div>
      <div className="notes__current-note">
        <textarea
          name="current-note"
          id="current-note"
          cols="30"
          rows="2"
          value={currentNote}
          onChange={(e) => setCurrentNote(e.currentTarget.value)}
          onFocus={handleTextareaFocus}
          ref={textareaRef}
        ></textarea>
        <button className="current-note__add-btn" onClick={handleAddBtnClick}>
          <span>{currentTimestamp}</span>
          <p>Add</p>
        </button>
      </div>
    </div>
  );
};

export default Notes;
