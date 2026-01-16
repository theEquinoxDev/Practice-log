import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [newTodo, setNewTodo] = useState([]);

  function handleOnClick() {
    if (input.trim() === "") return;

    setNewTodo([...newTodo, input]);
    setInput("");
  }

  function handleOnChange(e) {
    let v = e.target.value;
    setInput(v);
  }

  function handleDelete(index) {
    const updatedList = newTodo.filter((_, i) => i !== index);
    setNewTodo(updatedList);
  }
  return (
    <div>
      <input
        value={input}
        onChange={handleOnChange}
        type="text"
        placeholder="Enter a task"
      />
      <button onClick={handleOnClick}>Add</button>
      <ul>
        {newTodo.map((task, index) => {
          return (
            <li key={index}>
              {task}
              <button onClick={() => handleDelete(index)}> Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
