import React, { Component } from "react";
import css from "./TodoListItem.module.scss";
import classNames from "classnames";

export default class TodoItem extends Component {
    render() {
        const { id, task, completed, handleDelete, handleCheckbox } =
            this.props;
        return (
            <li
                className={classNames(css.todoItem, {
                    [css.todoDone]: completed,
                })}
            >
                <div className={css.checkboxContainer}>
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={() => handleCheckbox(id)}
                    />
                    <p className={css.text}>{task}</p>
                </div>
                <button type="button" onClick={() => handleDelete(id)}>
                    Видалити
                </button>
            </li>
        );
    }
}
