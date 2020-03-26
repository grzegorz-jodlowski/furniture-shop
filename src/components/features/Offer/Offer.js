import React from 'react';
import styles from './Offer.module.scss';
import PropTypes from 'prop-types';

import Button from '../../common/Button/Button';
import ProductBoxOffer from '../../common/ProductBoxOffer/ProductBoxOffer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

class Offer extends React.Component {
  static propTypes = {
    products: PropTypes.array,
  };

  render() {
    const { products } = this.props;
    return (
      <div className={styles.box}>
        <div className={styles.wrapper}>
          <div className={styles.hot}>
            <h2>Hot deals</h2>
            <div className={styles.dots}>
              <ul>
                <li>
                  <a className={styles.active}></a>
                </li>
                <li>
                  <a></a>
                </li>
                <li>
                  <a></a>
                </li>
              </ul>
            </div>
          </div>
          {products.map(item => (
            <ProductBoxOffer key={item.id} {...item} />
          ))}
        </div>
        <div className={styles.slider}>
          <img src='/images/living-room.jpg' alt='furniture' />
          <Button variant='nextBackBtn'>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
          <Button variant='nextBackBtn'>
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
          <div className={styles.title}>
            <h2>
              Indoor <span className={styles.bold}>furniture</span>
            </h2>
            <h3>Save up to 50% of all furniture</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Offer;
