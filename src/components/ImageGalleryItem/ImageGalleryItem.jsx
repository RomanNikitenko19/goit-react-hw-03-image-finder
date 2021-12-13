// import PropTypes from "prop-types";
import style from "../ImageGalleryItem.module.css";

const ImageGalleryItem = () => {
  return (
    <>
      {
        <li className={style.ImageGalleryItem}>
          <img className={style.ImageGalleryItem_image} src="" alt="" />
        </li>
      }
    </>
  );
}

export default ImageGalleryItem;