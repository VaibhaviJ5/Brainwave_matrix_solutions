import React from 'react';

const TodoItem = ({ todo, index, toggleComplete, removeTodo }) => {
    return (
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span onClick={() => toggleComplete(index)}>{todo.text}</span>
            <button onClick={() => removeTodo(index)}>Delete</button>
        </li>
    );
};

export default TodoItem;
