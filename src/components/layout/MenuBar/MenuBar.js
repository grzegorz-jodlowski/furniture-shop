import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';

class MenuBar extends React.Component {
  state = {
    activeHamburger: null,
  };

  handleHamburgerClick() {
    this.setState({
      activeHamburger: !this.state.activeHamburger,
    });
  }

  render() {

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row align-items-center'>
            <div className={'col ' + styles.search}>
              <ProductSearch />
              <div
                className={styles.hamburgerIcon}
                onClick={this.handleHamburgerClick.bind(this)}
              >
                &#9776;
              </div>
            </div>
            <div
              className={`col-auto ${styles.menu} ${this.state.activeHamburger &&
                styles.activeHamburgerMenu}`}
            >
              <ul>
                <li>
                  <a href='#' className={styles.active}>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#'>Furniture</a>
                </li>
                <li>
                  <a href='#'>Chair</a>
                </li>
                <li>
                  <a href='#'>Table</a>
                </li>
                <li>
                  <a href='#'>Sofa</a>
                </li>
                <li>
                  <a href='#'>Bedroom</a>
                </li>
                <li>
                  <a href='#'>Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
