import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoListItem from "../TodoListItem/TodoListItem";
import css from "./TodoList.module.scss";

export default class TodoList extends Component {
    render() {
        const { todos, handleDelete, handleCheckbox } = this.props;
        return (
            <div>
                <p>Всього завдань: {todos.length}</p>
                <p>
                    Виконано:
                    {todos.filter(({ completed }) => completed === true).length}
                </p>

                <ul className={css.list}>
                    {todos.map(({ id, task, completed }) => (
                        <TodoListItem
                            key={id}
                            id={id}
                            task={task}
                            completed={completed}
                            handleDelete={handleDelete}
                            handleCheckbox={handleCheckbox}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}
