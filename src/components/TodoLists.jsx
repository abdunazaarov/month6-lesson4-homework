import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TodoLists = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editing, setEditing] = useState(null);
  const [editingText, setEditingText] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, id: Date.now() }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setEditing(id);
    setEditingText(todo.text);
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editingText } : todo
      )
    );
    setEditing(null);
    setEditingText('');
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">Todo List</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button onClick={addTodo} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Add</button>
      </div>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between p-2 bg-gray-200 bg-opacity-75 rounded-md">
            {editing === todo.id ? (
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  className="flex-1 p-1 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button onClick={() => updateTodo(todo.id)} className="text-green-500 hover:text-green-600"><FaEdit /></button>
              </div>
            ) : (
              <>
                <span className="flex-1">{todo.text}</span>
                <div className="flex gap-2">
                  <button onClick={() => editTodo(todo.id)} className="text-blue-500 hover:text-blue-600"><FaEdit /></button>
                  <button onClick={() => deleteTodo(todo.id)} className="text-red-500 hover:text-red-600"><FaTrash /></button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoLists;
