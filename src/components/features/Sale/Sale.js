import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sale.module.scss';

const Sale = props => (
  <div className={styles.root}>
    <div className={`container ${styles.wrapper}`}>
      <div className='row'>
        <div className={`col ${styles.sofa}`}>full</div>
        <div className='col'>
          <div className={`col ${styles.chair}`}>fr</div>
          <div className={`col ${styles.bed}`}>fr</div>
        </div>
      </div>
    </div>
  </div>
);
Sale.propTypes = {};

export default Sale;
