import React from 'react';
import styles from './Gallery.module.scss';
//import PropTypes from 'prop-types';

const Gallery = () => {
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
              <img src={''} alt='product-1' />
            </div>
            <div className={styles.slider}>slider</div>
          </dic>
          <div className='col-6'>picture</div>
        </div>
      </div>
    </div>
  );
};


export default Gallery;