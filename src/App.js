import React from "react";
import initialTodos from "./todos.json";
import { nanoid } from "nanoid";
import TodoList from "./components/TodoList/TodoList";
import TodoEditor from "./components/TodoEditor/TodoEditor";
import { FormFormik } from "./components/FormFormik/FormFormik";
import { Form } from "formik";

export class App extends React.Component {
    state = {
        todos: initialTodos,
    };

    handleAddTask = (task) => {
        const id = nanoid();

        const todo = {
            id: id,
            task,
            completed: false,
        };

        this.setState((prevState) => ({
            todos: [todo, ...prevState.todos],
        }));
    };

    handleDelete = (_id) => {
        const { todos } = this.state;

        this.setState({
            todos: todos.filter(({ id }) => id !== _id),
        });
    };

    handleCheckbox = (_id) => {
        this.setState(({ todos }) => ({
            todos: todos.map((todo) =>
                todo.id === _id ? { ...todo, completed: !todo.completed } : todo
            ),
        }));
    };

    render() {
        const { todos } = this.state;
        return (
            <div>
                {/* <TodoEditor onSubmit={this.handleAddTask} />

                <TodoList
                    todos={this.state.todos}
                    handleCheckbox={this.handleCheckbox}
                    handleDelete={this.handleDelete}
                /> */}

                <FormFormik />
            </div>
        );
    }
}

export default App;
