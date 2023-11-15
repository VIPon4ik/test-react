import React, { Component } from 'react';
import css from './TodoEditor.module.scss';

export default class TodoEditor extends Component {
  state = {
    task: '',
  }

  handleChange = e => {
    this.setState({ task: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.task);
    this.setState({ task: ''});
  }

  render() {
    const { task } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.label}>
          Додати завдання:
          <textarea className={css.textArea} value={task} onChange={this.handleChange}></textarea>
        </label>

        <button className={css.button}>Зберегти</button>
      </form>
    )
  }
}
