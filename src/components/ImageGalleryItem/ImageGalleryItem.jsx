import PropTypes from "prop-types";
import style from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ smalImg, toggleModal, getAPicture, largeImg }) => {
  return (
    <>
      {
        <li onClick={() =>{toggleModal(); getAPicture(largeImg)}} className={style.ImageGalleryItem}>
          <img className={style.ImageGalleryItem_image} src={smalImg} alt="" />
        </li>
      }
    </>
  );
};

ImageGalleryItem.propTypes = {
  smalImg: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  getAPicture: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;