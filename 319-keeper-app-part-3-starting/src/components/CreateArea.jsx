import React, { useState } from "react";

function CreateArea(props) {

  const [note, setNote] = useState({title:"", content:""});
  function handletNotes(event){
    const {name, value} = event.target;
    console.log(value, name);
    // setNote((note) => {if(name === "title"){
    //   return setNote({title:value,content:note.content})}
    //   else if(name === "content"){
    //     return setNote({title:note.title,content:value})}
    // });
    setNote((prev) => {return{...prev, [name]:value}});
    // console.log(inputArea);
  }

  function handleAddNote(event){
    event.preventDefault();
    props.onAddNote(note);
    setNote({title:"", content:""})
  }
  // function handletTextArea(event){
  //   const newValue = event.target.value;
  //   setTextArea(newValue)
  //   console.log(textArea);
  //   // console.log(inputArea);
  // }
  return (
    <div>
      <form>
        <input onChange={handletNotes} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handletNotes} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={handleAddNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
