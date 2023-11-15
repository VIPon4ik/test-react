import React from "react";
import initialTodos from "./todos.json";
import { nanoid } from "nanoid";
import TodoList from "./components/TodoList/TodoList";
import TodoEditor from "./components/TodoEditor/TodoEditor";
import { FormFormik } from "./components/FormFormik/FormFormik";
import { Form } from "formik";
import Modal from "./components/Modal/Modal";

class App extends React.Component {
    state = {
        todos: [],
        showModal: false,
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

    componentDidMount() {
        const todos = localStorage.getItem('todos');
        const parsedTodos = JSON.parse(todos);

        if (parsedTodos) {
            this.setState({ todos: parsedTodos })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.todos !== this.state.todos) {
            console.log('Todos оновилось')

            localStorage.setItem('todos', JSON.stringify(this.state.todos));
        }
    }

    modalToggle = () => {
        this.setState(({ showModal }) => ({ showModal: !showModal }))
    }

    render() {
        const { todos, showModal } = this.state;
        return (
            <div>
                <button type="button" onClick={this.modalToggle}>Відкрити модалку</button>
                {showModal && <Modal onClose={this.modalToggle}>
                    <h1>Some text</h1>
                    <p>lorem ipsum kurwa matkajfkdsjalfkjslk
                        fdsjkfdslkfjlkjsflkjdslk jfkldsjl
                    </p>
                    <button type="button" onClick={this.modalToggle}>Закрити модалку</button>
                </Modal> }
                <TodoEditor onSubmit={this.handleAddTask} />

                <TodoList
                    todos={this.state.todos}
                    handleCheckbox={this.handleCheckbox}
                    handleDelete={this.handleDelete}
                />

                {/* <FormFormik /> */}
            </div>
        );
    }
}

export default App;
