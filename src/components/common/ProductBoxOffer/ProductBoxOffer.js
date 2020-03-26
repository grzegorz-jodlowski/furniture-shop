import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBoxOffer.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

class ProductBoxOffer extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    name: PropTypes.string,
    price: PropTypes.number,
    oldPrice: PropTypes.number,
    stars: PropTypes.number,
    favorite: PropTypes.bool,
    addFavorite: PropTypes.func,
    compare: PropTypes.bool,
    id: PropTypes.string,
    photo: PropTypes.string,
  };

  render() {
    const { name, oldPrice, price, stars, compare, photo } = this.props;
    return (
      <div className={styles.root}>
        <div className={styles.photo}>
          <img src={photo} alt='bed' />
          <div className={styles.buttons}>
            <Button variant='small'>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
          </div>
          <div className={styles.time}>
            <span className={styles.hour}>25</span>
            <span>days</span>
          </div>
          <div className={styles.time}>
            <span className={styles.hour}>10</span>
            <span>hrs</span>
          </div>
          <div className={styles.time}>
            <span className={styles.hour}>45</span>
            <span>mins</span>
          </div>
          <div className={styles.time}>
            <span className={styles.hour}>30</span>
            <span>sec</span>
          </div>
        </div>
        <div className={styles.content}>
          <h5>{name}</h5>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map(i => (
              <a key={i} href='#'>
                {i <= stars ? (
                  <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                ) : (
                  <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                )}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.actions}>
          <div className={styles.outlines}>
            <Button variant='outline'>
              <FontAwesomeIcon icon={faEye}>Favorite</FontAwesomeIcon>
            </Button>
            <Button variant='outline'>
              <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
            </Button>
            <Button compare={compare} variant='outline'>
              <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
            </Button>
          </div>

          <div className={styles.price}>
            {oldPrice && (
              <Button noHover variant='oldPrice'>
                $ {oldPrice}
              </Button>
            )}
            <Button variant='small'>{price}</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductBoxOffer;
