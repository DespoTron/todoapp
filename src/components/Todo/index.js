import React, { useState } from 'react';
import { TodoForm } from '../../components';
import { HighlightOffIcon } from '@material-ui/icons/HighlightOff';
import { EditIcon } from '@material-ui/icons/Edit';

export default ({ todos, completeTodo, removeTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  return todos.map((todo, index) => {
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>

      <div className="icons">
        <HighlightOffIcon
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <EditIcon
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>;
  });
};
