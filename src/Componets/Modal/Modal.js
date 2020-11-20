import React, { Component } from "react";
import './Modal.css';

class Modal extends Component {

  toggleKeybord = (e) => {
    if (e.code === 'Escape') {
      this.props.closeModal()
    }
  }
  componentDidMount() {
    window.addEventListener('keydown', this.toggleKeybord)
  }

  componentWillMount() {
    window.removeEventListener('keydown', this.toggleKeybord)
  }

  render() {
    return (
      <>
        <div onClick={this.props.closeModal} className="Overlay">
          <div className="Modal">
            <img src={this.props.listimg} alt={this.props.listimg} />
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
