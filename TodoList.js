import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, removeTodo }) => {
    return (
        <ul className="todo-list">
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    todo={todo}
                    index={index}
                    toggleComplete={toggleComplete}
                    removeTodo={removeTodo}
                />
                                                                                                                                                                                                      
            ))}
        </ul>
    );
};

export default TodoList;
