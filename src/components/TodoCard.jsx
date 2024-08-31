import React from 'react';
import TodoItem from './TodoItem';

function TodoCard({ status, todos, moveTodo }) {
  return (
    <div className="todo-card" id={status}>
      <h2>{status.charAt(0).toUpperCase() + status.slice(1)}</h2>
      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} moveTodo={moveTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoCard;
