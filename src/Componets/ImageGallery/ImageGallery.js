import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from "prop-types";
import './ImageGallery.css';

function ImageGallery(props) {
  const { listimg, currrentModal } = props;

     return (
       <>
         <ul className="ImageGallery">
           {listimg.map((item) => (
             <ImageGalleryItem key={item.id} item={item} currrentModal={currrentModal} />
           ))}
         </ul>
       </>
     );
}

export default ImageGallery;

ImageGallery.propTypes = {
  listimg: PropTypes.arrayOf(PropTypes.object).isRequired,
  currrentModal: PropTypes.func.isRequired
};