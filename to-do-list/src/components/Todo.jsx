import React from 'react'

import '../App.css';

const Todo = ({ todo, deleteTodo, completeTodo }) => {

  return (

    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
    <div className="content">
      <p>{todo.text}</p>
      <p className="category">({todo.category})</p>
    </div>
    <div>
      <button className='complete' onClick={() => completeTodo(todo.id)}>Completar</button>
      <button className='delete' onClick={() => deleteTodo(todo.id)}>Excluir</button>
    </div>
  </div>

  )
}

export default Todo;