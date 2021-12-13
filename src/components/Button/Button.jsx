// import PropTypes from "prop-types";
import style from "./Button.module.css";
const Button = ({ increasePageRequest }) => {
  return (
    <button onClick={increasePageRequest} className={style.Button}>
      Load more
    </button>
  );
};

// Button.propTypes = {
//   increasePageRequest: PropTypes.func,
// };

export default Button;
