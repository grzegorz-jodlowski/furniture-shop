import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => {

  const mql = window.matchMedia('(max-width:  768px)');
  let mobile = false;
  mediaqueryresponse(mql);
  mql.addListener(mediaqueryresponse);
  function mediaqueryresponse(mql) {
    if (mql.matches) {
      mobile = true;
    }
  }

  return (
    <div className={mobile ? styles.wrapMd : ''}>
      <form action='' className={styles.root + ' ' + (mobile ? styles.mobile : '')}>
        <div className={styles.category}>
          <FontAwesomeIcon className={styles.icon} icon={faListUl} />
          <ul className={styles.list}>
            <li className={styles.listCategory}>
              <span value=''>Select a category</span>
            </li>
            <li className={styles.activeList}>
              <span value=''>Bedroom</span>
            </li>
            <li className={styles.activeList}>
              <span value=''>Kitchet</span>
            </li>
            <li className={styles.activeList}>
              <span value=''>Livingroom</span>
            </li>
            <li className={styles.activeList}>
              <span value=''>Bathroom</span>
            </li>
            <li className={styles.activeList}>
              <span value=''>Kids</span>
            </li>
          </ul>
          <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
        </div>
        <div className={styles.searchField}>
          <input placeholder='Search products...' type='text' />
          <button>
            <FontAwesomeIcon className={styles.icon} icon={faSearch} />
          </button>
        </div>
      </form>
    </div>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
