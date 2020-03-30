import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBoxContainer';
import SwipeComponent from '../../common/ SwipeComponent/SwipeComponent';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    setActive: false,
  };

  handlePageChange(newPage) {
    this.setState({
      activePage: newPage,
      setActive: true,
    });

    setTimeout(() => {
      this.setState({ setActive: false });
    }, 150);
  }

  handleCategoryChange(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  CompareProduct( products, remove) {
    return (
      <div className={styles.compareContainer}>
        {products && products.map(({ img, id, name }) => (

          <div key={id} className={styles.productImage}>
            <img src={img} alt={name} />
            <div className={styles.close} onClick={() => remove(id)}>
              x
            </div>
          </div>
        ))}
        <a href='#'>Compare</a>
        <div className={styles.close} onClick={() => remove()}>
          x
        </div>
      </div>
    );
  }

  render() {
    const { categories, products, deviceMode } = this.props;
    const { activeCategory, activePage } = this.state;

    let productsPerPage;

    switch (deviceMode) {
      case 'phone':
        productsPerPage = 1;
        break;
      case 'tablet':
        productsPerPage = 2;
        break;
      case 'laptop':
        productsPerPage = 8;
        break;
      default:
        return 8;
    }

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / productsPerPage);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-lg-auto col-12 ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className='row'>
            {categoryProducts
              .slice(activePage * productsPerPage, (activePage + 1) * productsPerPage)
              .map(item => (
          <SwipeComponent
            itemsCount={pagesCount}
            activeItem={this.state.activePage}
            swipeAction={this.handlePageChange.bind(this)}
          >
                <div
                  key={item.id}
                  className={
                    'col-lg-3 col-md-6 col-sm-12 ' +
                  (this.state.setActive ? 'fade' : 'fade show')
                  }
                >
                  <ProductBox {...item} />
                </div>
              ))}
            </div>
          </SwipeComponent>
        </div>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.bool,
  children: PropTypes.node,
  deviceMode: PropTypes.string,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
