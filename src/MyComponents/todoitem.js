import React from 'react'

export const Todoitem = ({todo, onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-danger btm-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
      {/* we put the function inside onclick inside another arrow function so that while redering the 
      function is not executed even without clicking button */}
    </div>
  )
}
