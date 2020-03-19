import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

class ProductBox extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    name: PropTypes.string,
    price: PropTypes.number,
    oldPrice: PropTypes.number,
    promo: PropTypes.string,
    stars: PropTypes.number,
    favorite: PropTypes.bool,
    addFavorite: PropTypes.func,
    compare: PropTypes.bool,
    id: PropTypes.string,
  };

  handleFavorite(event) {
    event.preventDefault();
    this.props.addFavorite(this.props.id);
  }

  render() {
    const { name, oldPrice, price, promo, stars, favorite, compare } = this.props;
    return (
      <div className={styles.root}>
        <div className={styles.photo}>
          {promo && <div className={styles.sale}>{promo}</div>}
          <div className={styles.buttons}>
            <Button variant='small'>Quick View</Button>
            <Button variant='small'>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
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
            <Button
              onClick={this.handleFavorite.bind(this)}
              favorite={favorite}
              variant='outline'
            >
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
            <Button noHover variant='small'>
              $ {price}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductBox;
