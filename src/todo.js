import React from 'react'
import Card from "react-bootstrap/Card";
import './App.css';
const Todo = props => {
    return (
        <div 
            key={props.todo.id}
            onClick={
                props.toggleComplete(props.todo.id)
            }
            >
            
<Card  className="a" style={{ width: '10rem',background:"gray",fontSize:"50px",color:"yellow"}}>
  <Card.Body>
    <Card.Title style={{textDecoration: props.todo.status==="completed" ? 'line-through' : 'none'}}>
   {props.todo.value}

</Card.Title>
</Card.Body>

</Card>
</div>
    )
}

export default Todo;