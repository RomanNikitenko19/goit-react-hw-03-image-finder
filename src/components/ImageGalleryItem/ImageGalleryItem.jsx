// import PropTypes from "prop-types";
import style from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({smalImg, largeImg}) => {
  return (
    <>
      {
        <li className={style.ImageGalleryItem}>
          <img className={style.ImageGalleryItem_image} src={smalImg} alt="" />
        </li>
      }
    </>
  );
}

export default ImageGalleryItem;