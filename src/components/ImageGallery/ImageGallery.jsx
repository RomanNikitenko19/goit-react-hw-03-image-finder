import PropTypes from "prop-types";
import style from "../ImageGallery/ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images, getAPicture, toggleModal }) => {
  return (
    <>
      <ul className={style.ImageGallery}>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            toggleModal={toggleModal}
            getAPicture={getAPicture}
            smalImg={webformatURL}
            largeImg={largeImageURL}
          />
        ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  getAPicture: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default ImageGallery;