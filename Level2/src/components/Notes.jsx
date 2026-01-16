import { useState, useEffect } from "react";

const Notes = () => {
  const [noteInput, setNoteInput] = useState('');
  const [notesList, setNotesList] = useState([]);

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if(storedNotes) {
      setNotesList(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notesList));
  }, [notesList])
  
  function handleOnChange(e) {
    let input = e.target.value;
    setNoteInput(input);
  }
  function handleOnClick() {
    setNotesList([...notesList, noteInput]);
    setNoteInput("");
  }

  return (
    <div>
      <div>Notes</div>
      <input
      value={noteInput}
        onChange={handleOnChange}
        type="text"
        placeholder="enter ur notes"
      />
      <button onClick={handleOnClick}>Add</button>
      <ul>
        {notesList.map((notes, index) => {
          return (
            <li key={index}>{notes}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default Notes;
