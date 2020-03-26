import React from 'react';
import styles from './Brands.module.scss';
import PropTypes from 'prop-types';

const Brands = ({ brands }) => {
  return <div className={styles.component}></div>;
};

Brands.propTypes = {
  brands: PropTypes.array,
};

export default Brands;
