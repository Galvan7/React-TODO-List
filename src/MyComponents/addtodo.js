import React, { useState } from "react";
import "./addtod.css";

export const Addtodo = (props) => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    //avoids reload above one
    if (!title || !desc) {
      alert("One or both fields are empty");
    } 
    else {
      props.addTodo(title, desc);
      settitle("");
      setdesc("");
    }
  };
  return (
    <div className="container">
      <h3>Add a Entry</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Enter the title of the task
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-primary btm-sm">
          Submit
        </button>
      </form>
    </div>
  );
};
