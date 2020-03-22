import React from 'react';
import styles from './Gallery.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import {
  faHeart,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';


const Gallery = ({products}) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div  className='row'>
          <dic className='col-6'>
            <div className={styles.heading}>
              <h3>Furniture gallery</h3>
            </div>
            <div className={styles.menu}>
              <ul>
                <li>
                  <span className={styles.active}>Featured</span>
                </li>
                <li>
                  <span>Top seller</span>
                </li>
                <li>
                  <span>Sale off</span>
                </li>
                <li>
                  <span>Top rated</span>
                </li>
              </ul>
            </div>
            <div className={styles.product}>
              <img src={products[0].photo} alt='product-1' />
              <div className={styles.buttons}>
                <Button variant='galleryBtn'>
                  <FontAwesomeIcon icon={faHeart}>Add to compare</FontAwesomeIcon>
                </Button>
                <Button variant='galleryBtn'>
                  <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
                </Button>
                <Button variant='galleryBtn'>
                  <FontAwesomeIcon icon={faEye}>Add to compare</FontAwesomeIcon>
                </Button>
                <Button variant='galleryBtn'>
                  <FontAwesomeIcon icon={faShoppingBasket}>Add to compare</FontAwesomeIcon>
                </Button>
              </div>
            </div>
            <div className={styles.slider}>slider</div>
          </dic>
          <div className='col-6'>picture</div>
        </div>
      </div>
    </div>
  );
};

Gallery.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
      favorite: PropTypes.bool,
      photo: PropTypes.string,
    })
  ),
};

export default Gallery;