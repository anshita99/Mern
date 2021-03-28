  
import React from 'react';

const TodoItem = props =>{
    return (
        <center>
        <li>{props.todo.name}</li>
        </center>
    )
}

export default TodoItem;