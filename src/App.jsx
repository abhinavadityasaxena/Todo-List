import React, { useState, useEffect } from 'react';
import './index.css';
import TodoCard from './components/TodoCard';

// Sample Data
const initialTodos = [
  { id: 1, text: "Define project scope", status: "backlog" },
  { id: 2, text: "Design UI components", status: "todo" },
  { id: 3, text: "Develop backend API", status: "ongoing" },
  { id: 4, text: "Testing and QA", status: "done" },
  // Add more tasks as needed...
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const moveTodo = (id, direction) => {
    setTodos(prevTodos => {
      const newTodos = [...prevTodos];
      const todoIndex = newTodos.findIndex(todo => todo.id === id);
      const statusOrder = ["backlog", "todo", "ongoing", "done"];
      const currentIndex = statusOrder.indexOf(newTodos[todoIndex].status);
      const newIndex = currentIndex + direction;

      if (newIndex >= 0 && newIndex < statusOrder.length) {
        newTodos[todoIndex].status = statusOrder[newIndex];
      }

      return newTodos;
    });
  };

  return (
    <div className="todo-container">
      {["backlog", "todo", "ongoing", "done"].map(status => (
        <TodoCard
          key={status}
          status={status}
          todos={todos.filter(todo => todo.status === status)}
          moveTodo={moveTodo}
        />
      ))}
    </div>
  );
}

export default App;
