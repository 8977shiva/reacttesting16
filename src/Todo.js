import React, { useState } from "react";
const Todo = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      return;
    }
    const newItem = {
      text: text,
      id: Date.now()
    };
    setItems(items.concat(newItem));
    setText("");
  };

  return (
    <div>
      <h3>TODO</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">What needs to be done?</label>
        <input id="new-todo" onChange={handleChange} value={text} />
        <button>Add #{items.length + 1}</button>
      </form>
      <div className="list-container">
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
