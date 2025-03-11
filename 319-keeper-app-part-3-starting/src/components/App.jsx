import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState([{title:"Note title", content: "Note content"}]);
  
  function handleNote(newNote){
    // console.log(newNote);
    console.log(newNote);
    setNote([...note, newNote])
  }

  function deleteItem(id){
    console.log(id);
    setNote(note.filter((_,index)=> index !==id))
  }
  
  return (
    <div>
      <Header />
      <CreateArea onAddNote = {handleNote} />
      {note.map((noteItem, index) => <Note key={index} id={index} onDelete={deleteItem} title={noteItem.title} content={noteItem.content} ></Note>)}
      {/* <Note key={1} title={note.title} content={note.content} /> */}
      <Footer />
    </div>
  );
}

export default App;
