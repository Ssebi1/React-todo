import React from 'react';

//Importing components
import Todo from './Todo';

const TodoList = (props) => (
    <div className="todo-container">
        <ul className="todo-list">
            {
                props.filteredTodos.map((todo) => (
                    <Todo todo={todo} text={todo.text} key={todo.id} todos={props.todos} setTodos={props.setTodos} />
                ))
            }
        </ul>
    </div>
);

export default TodoList;