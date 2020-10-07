import Todo from './todo.js';
import React from 'react'
import './App.css';
const TodoList = props => {
    return (
        <div>
            {props.todos.map((todo, id) => (
                <Todo 
                    todo={todo} 
                    key={id} 
                    toggleComplete={props.toggleComplete} />
            ))}
        </div>
    )
}

export default TodoList;