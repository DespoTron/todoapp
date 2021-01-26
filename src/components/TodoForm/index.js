import React, { useState } from 'react';

export default (props) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // props.onSubmit({
    //   id: Math.floor(Math.random() * 10000),
    //   text: input,
    // });

    setInput('');
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
          onChange={handleChange}
        />

        <button className="todo__button">Add Todo</button>
      </form>
    </div>
  );
};
