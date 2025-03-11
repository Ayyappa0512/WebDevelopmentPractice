import React, { useState } from "react";


function TodoList(props){
    

    // return <li style={{textDecoration: liClass?"line-through":"none"}} onClick={()=>setLiClass(!liClass)} >{props.todoItem}</li>;
    return <li onClick={() => props.deleteItem(props.id)} >{props.todoItem}</li>;
}

export default TodoList;