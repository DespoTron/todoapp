import React, { useState } from 'react';

export default () => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className="todo__form" onSubmit="{handleSubmit}">
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          className="todo__input"
        />

        <button className="todo__button">Add Todo</button>
      </form>
    </div>
  );
};
