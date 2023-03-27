import React from "react";
import "./todos.css";
import { Todoitem } from "../MyComponents/todoitem";
export const Todos = (props) => {
  let mystyle={
    minHeight : "70vh",
    margin : "37px auto"
  }
  return (
    <div className="container my-3" style={mystyle}>
      <h3>Todos List</h3>
      <div className="styling">
        {props.todos.length === 0
          ? "NO todos to display as of yet"
          : props.todos.map((todo) => {
              return (
                <>
                <Todoitem todo={todo} key={todo.sn} onDelete={props.onDelete}/><hr/>
                </>
              );
            })}
      </div>

      {/* provided key for identification inside map no need to access in todoitem */}
    </div>
  );
};
