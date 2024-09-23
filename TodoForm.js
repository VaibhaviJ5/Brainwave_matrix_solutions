import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input) {
            addTodo(input);
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a new task..." required/>
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm;
