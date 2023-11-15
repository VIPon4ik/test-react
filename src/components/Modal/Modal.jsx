import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.scss';

const modalContainer = document.getElementById("modal-root");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscape);
  }

  handleEscape = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  }

  render() {
    const { children } = this.props;
    return createPortal(
      <div className={css.backdrop__background}>
        <div className={css.backdrop__window}>{children}</div>
      </div>,
      modalContainer
    )
  }
}
