import React, { useState } from "react";

const Form = (props) => {
  const [nameInput, setNameInput] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    props.addTask(nameInput);
    setNameInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        onChange={(event) => setNameInput(event.target.value)}
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={nameInput}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
};

export default Form;
