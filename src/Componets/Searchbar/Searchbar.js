import React, { Component } from 'react';
import './Searchbar.css';

class Searchbar extends Component {
  state = {
    inputValue: "",
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    const {inputValue} = this.state
    this.props.searchValue(inputValue);
    this.props.getnewImages(inputValue);
  }

  render() {
    // console.log(this.state.inputValue);
    return (
      <>
        <header className="Searchbar">
          <form onSubmit={this.onHandleSubmit} className="SearchForm">
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              onChange={this.onHandleChange}
              className="SearchForm-input"
              type="text"
              name="inputValue"
              value={this.state.inputValue}
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;