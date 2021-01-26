import React, { useState } from 'react';
import { TodoForm } from '../../components';

export default () => {
  const [todos, setTodos] = useState('');

  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <TodoForm />
    </div>
  );
};
