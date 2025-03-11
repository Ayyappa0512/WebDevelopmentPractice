import React, { useState } from "react";
import TodoList from "./TodoList";


function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleList(){
    setTodoList([...todoList, inputText]);
    setInputText("");
  }

  function handleDeleteItem(indexToDelete){
    console.log(indexToDelete);
    setTodoList((prevs) => {
      const newList =prevs.filter((_, index)=> index !== indexToDelete);
      console.log("index to delete", indexToDelete)
      console.log("d",newList);
      return newList });
    console.log(todoList);
  }

  function handleInpuText(event){
    var value = event.target.value;
    setInputText(value);
    event.preventDefaults();
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleInpuText} name="todo" type="text" value={inputText} />
        <button onClick={handleList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
            {todoList.map((todoItme, index) => <TodoList key = {index} id = {index} deleteItem = {handleDeleteItem} todoItem={todoItme} />)}
        </ul>
      </div>
    </div>
  );
}

const prevs = ['a','b', 'c', 'd'];
console.log('array', prevs);
const  newArray = prevs.filter((prevs, index) => index !== 2);
console.log('new array', newArray);

export default App;
