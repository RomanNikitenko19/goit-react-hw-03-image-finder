import React from 'react';
import PropTypes from "prop-types";
import './ImageGalleryItem.css';

function ImageGalleryItem(props) {
     const { item, currrentModal } = props;
     return (
       <>
         <li onClick={currrentModal} className="ImageGalleryItem">
           <img
             src={item.webformatURL}
             alt={item.user}
             className="ImageGalleryItem-image"
             data-large={item.largeImageURL}
           />
         </li>
       </>
     );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
  currrentModal: PropTypes.func.isRequired
};