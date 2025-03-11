import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from "@mui/material/Fab";
import { Zoom } from "@mui/material";



function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpandable, setISExpandable] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    setISExpandable(false);
    event.preventDefault();
  }
  function expand(){
    setISExpandable(true);
  }
  console.log(isExpandable);
 
  return (
    <div>
      <form className="create-note">
        
        <input
          name="title"
          onClick={expand}
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        {isExpandable &&
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpandable?"3":"1"}
        />}
        <Zoom in={isExpandable} unmountOnExit>
          <Fab color="primary" aria-label="add" onClick={submitNote} >
            <AddIcon />
          </Fab>
        </Zoom>
        {/* <button >
          <AddIcon className="center" />
        </button> */}
      </form>
    </div>
  );
}

export default CreateArea;
