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
import Rating from '../Rating/RatingContainer';

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
    userRate: PropTypes.number,
  };

  handleFavorite(event) {
    event.preventDefault();
    this.props.addFavorite(this.props.id);
  }

  render() {
    const {
      id,
      name,
      oldPrice,
      price,
      promo,
      stars,
      favorite,
      compare,
      userRate,
    } = this.props;
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
          <div>
            <Rating stars={stars} userRate={userRate} id={id} />
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
