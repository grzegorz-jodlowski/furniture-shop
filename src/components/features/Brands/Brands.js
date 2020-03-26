import React from 'react';
import styles from './Brands.module.scss';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';

const Brands = ({ brands }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <div className='col '>
          <div className={styles.slider}>
            <Button className={styles.preview}>
              <p>{'<'}</p>
            </Button>
            <div className={styles.thumbnails}>
              {brands.slice(0, 6).map(brand => (
                <div key={brand.id} className={styles.thumbnail}>
                  <img src={brand.photo} alt={brand.name} />
                </div>
              ))}
            </div>
            <Button className={styles.next}>
              <p>{'>'}</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Brands.propTypes = {
  brands: PropTypes.array,
};

export default Brands;
