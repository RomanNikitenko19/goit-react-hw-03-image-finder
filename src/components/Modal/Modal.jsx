import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import style from "./Modal.module.css";

const modalRootRef = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.onEscPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onEscPress);
  }

  onEscPress = event => {
    if (event.code === "Escape") {
      this.props.toggleModal();
    }
  };

  onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.toggleModal();
    }
  };

  render() {
    const { largeImageURL } = this.props;
    console.log(largeImageURL);
    return createPortal(
      <>
        {
          <div onClick={this.onBackdropClick}  className={style.Overlay}>
            <div className={style.Modal}>
              <img src={largeImageURL} alt="" />
            </div>
          </div>
        }
      </>,
      modalRootRef
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;