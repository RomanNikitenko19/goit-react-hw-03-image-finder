import React from 'react';
import PropTypes from "prop-types";
import './Button.css';

function Button({loadMore}) {
     return (
          <>
               <button className="Button" onClick={loadMore}>Load more</button>
          </>
     );
}

export default Button;

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};