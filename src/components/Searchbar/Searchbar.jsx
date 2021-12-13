import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    searchValue: '',
  }

  handleChange = event => {
    const value = event.target.value;
    this.setState({ searchValue: value })
  }

  handelSubmit = event => {
    event.preventDefault();
    this.props.addDataForRequest(this.state.searchValue);
  }

  render() {
    return (
      <>
        <header className={style.Searchbar}>
          <form className={style.SearchForm} onSubmit={this.handelSubmit}>
            <button className={style.SearchForm_button} type="submit">
              <span className={style.SearchForm_button_label}>Search</span>
            </button>

            <input
              className={style.SearchForm_input}
              onChange={this.handleChange}
              value={this.state.searchValue}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}

Searchbar.propTypes = {
  addDataForRequest: PropTypes.func.isRequired,
};
export default Searchbar;