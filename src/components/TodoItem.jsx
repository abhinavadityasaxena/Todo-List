import React from 'react';

function TodoItem({ todo, moveTodo }) {
  const { id, text, status } = todo;
  const statusOrder = ["backlog", "todo", "ongoing", "done"];
  const currentIndex = statusOrder.indexOf(status);

  return (
    <li className="todo-item">
      <span>{text}</span>
      <div className="todo-buttons">
        <button
          className="button button-left"
          onClick={() => moveTodo(id, -1)}
          disabled={currentIndex === 0}
        >
          ←
        </button>
        <button
          className="button button-right"
          onClick={() => moveTodo(id, 1)}
          disabled={currentIndex === statusOrder.length - 1}
        >
          →
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
