import PropTypes from "prop-types";
import style from "../ImageGallery/ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ images }) => {
  return (
    <>
      <ul className={style.ImageGallery}>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem key={id} smalImg={webformatURL} largeImg={largeImageURL} />
        ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;