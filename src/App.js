import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/header";
import { Todos } from "./MyComponents/todos"; /*export default nhi hai isiliye*/
import { Footer } from "./MyComponents/footer";
import { About } from "./MyComponents/about";
import { Addtodo } from "./MyComponents/addtodo";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("Deleted", todo);
    //normal deleting using splice does not work in react instrad we need to use usestate below
    setTodos(
      todos.filter((e) => {
        //filter is the selector which selects every other than the one
        //pressed the button for and update the list with the the remaining values
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addtodo = (title, desc) => {
    console.log("Adding item", title);
    let newsl;
    if (todos.length === 0) {
      newsl = 0;
    } else {
      newsl = todos[todos.length - 1].sn + 1;
    }
    const item = {
      sn: newsl,
      title: title,
      desc: desc,
    };
    setTodos([...todos, item]);
    console.log(item);
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  //use effect is a hook whuch executes the command when ever the value inside [] is changed
  return (
    <>
      <Router>
        <Header title="Aman's Todo List" searchbar={true} />

        <Routes>
          <Route path="/" element={<><Addtodo addTodo={addtodo} />
          <Todos todos={todos} onDelete={onDelete} /></>} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
