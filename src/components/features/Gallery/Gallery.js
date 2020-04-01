import React from 'react';
import styles from './Gallery.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import 'rc-tooltip/assets/bootstrap_white.css';
import Tooltip from 'rc-tooltip';
import SwipeComponent from '../../common/ SwipeComponent/SwipeComponent';
import {
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';
import Rating from '../../common/Rating/RatingContainer';
import FadeIn from 'react-fade-in';

class Gallery extends React.Component {
  state = {
    activeTab: 'featured',
    filteredArr: this.props.products.filter(el => el.newFurniture === true),
    activePage: 0,
    currentProduct: {
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      oldPrice: 50,
      price: 30,
      stars: 2,
      promo: '',
      newFurniture: true,
      favorite: true,
      photo: '/images/products/beds/bed1.jpeg',
      userRate: 4,
    },
  };
  resize = () => this.forceUpdate()
  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }
  setNewCurrentProduct(el) {
    this.setState({
      currentProduct: {
        id: el.id,
        name: el.name,
        price: el.price,
        oldPrice: el.oldPrice,
        stars: el.stars,
        promo: el.promo,
        newFurniture: el.newFurniture,
        favorite: el.favorite,
        photo: el.photo,
      },
    });
  }
  moveRight() {
    const pagesCount = Math.ceil(this.state.filteredArr.length / 6);
    if (this.state.activePage < pagesCount - 1) {
      this.setState(prevState => ({
        activePage: prevState.activePage + 1,
      }));
    }
  }
  moveLeft() {
    const pagesCount = Math.ceil(this.state.filteredArr.length / 6);
    if (this.state.activePage > 0 && this.state.activePage < pagesCount) {
      this.setState(prevState => ({
        activePage: prevState.activePage - 1,
      }));
    }
  }
  filterProducts(arr, activeTab) {
    return new Promise((resolve) => {
      switch (activeTab) {
        case 'featured':
          this.setState(
            { filteredArr: arr.filter(el => el.newFurniture === true) },
            resolve()
          );
          break;
        case 'topSeller':
          this.setState(
            { filteredArr: arr.filter(el => el.favorite === true) },
            resolve()
          );
          break;
        case 'saleOff':
          this.setState(
            { filteredArr: arr.filter(el => el.promo === 'sale') },
            resolve()
          );
          break;
        case 'topRated':
          this.setState({ filteredArr: arr.filter(el => el.stars === 5) }, resolve());
          break;
        default:
          this.setState(
            { filteredArr: arr.filter(el => el.newFurniture === true) },
            resolve()
          );
      }
    });
  }
  async handleTabChange(arr, newTab) {
    this.setState({ activeTab: newTab });
    await this.filterProducts(arr, newTab);
    this.setNewCurrentProduct(this.state.filteredArr[0]);
  }

  handlePageChange(newPage) {
    this.setState({ activePage: newPage });
  }

  render() {
    const { products } = this.props;
    const { activeTab, filteredArr, activePage, currentProduct } = this.state;
    const categories = [
      { id: 'featured', name: 'featured' },
      { id: 'topSeller', name: 'top seller' },
      { id: 'saleOff', name: 'sale off' },
      { id: 'topRated', name: 'top rated' },
    ];

    const windowWidth = window.innerWidth;
    const pagesCount = products.length;

    let mode;
    if (windowWidth > 1200) {
      mode = 6 ;
    } else if (windowWidth > 990) {
      mode = 5;
    } else if (windowWidth > 767) {
      mode = 3;
    } else {
      mode = 5;
    }
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-6 '>
              <div className={styles.heading}>
                <h3>Furniture gallery</h3>
              </div>
              <div className={styles.menu}>
                <ul>
                  {categories.map(el => (
                    <li key={el.id}>
                      <span
                        className={el.id === activeTab && styles.active}
                        onClick={() => {
                          this.handleTabChange(products, el.id);
                        }}
                      >
                        {el.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <FadeIn transitionDuration={2000}>
                <div className={styles.productSlider }>
                  <div className={styles.product}>
                    <img src={currentProduct.photo} alt='product' />
                    <div className={styles.buttons}>
                      <Tooltip
                        placement='right'
                        overlay='Add to favorite'
                        arrowContent={<div className='rc-tooltip-arrow-inner' />}
                      >
                        <Button variant='galleryBtn'>
                          <FontAwesomeIcon icon={faHeart}>{'Add to compare'}</FontAwesomeIcon>
                        </Button>
                      </Tooltip>
                      <Tooltip
                        placement='right'
                        overlay='Add to compare'
                        arrowContent={<div className='rc-tooltip-arrow-inner' />}
                      >
                        <Button variant='galleryBtn'>
                          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
                        </Button>
                      </Tooltip>
                      <Tooltip
                        placement='right'
                        overlay='View details'
                        arrowContent={<div className='rc-tooltip-arrow-inner' />}
                      >
                        <Button variant='galleryBtn'>
                          <FontAwesomeIcon icon={faEye}>View details</FontAwesomeIcon>
                        </Button>
                      </Tooltip>
                      <Tooltip
                        placement='right'
                        overlay='Add to basket'
                        arrowContent={<div className='rc-tooltip-arrow-inner' />}
                      >
                        <Button variant='galleryBtn'>
                          <FontAwesomeIcon icon={faShoppingBasket}>Add to basket</FontAwesomeIcon>
                        </Button>
                      </Tooltip>
                    </div>
                    <div className={styles.content}>
                      <div className={styles.triangleTopLeft} />
                      <h5>{currentProduct.name}</h5>
                      <div className={styles.stars}>

                        <Rating stars={products[0].stars} userRate={products[0].userRate} id={products[0].id} />

                      </div>
                      <div className={styles.triangleBottomRight} />
                      <div className={styles.price}>
                        <h3>${currentProduct.price}</h3>
                        <h5><s>${currentProduct.oldPrice}</s></h5>
                      </div>
                    </div>
                  </div>
                  <div className={styles.slider}>
                    <Button
                      className={styles.preview}
                      onClick={e => {
                        e.preventDefault();
                        this.moveLeft();
                      }}
                    >
                      <p>{'<'}</p>
                    </Button>
                    <SwipeComponent
                      rightAction={() => this.handlePageChange(activePage > 0 ? activePage - 1 : 0)}
                      leftAction={() =>
                        this.handlePageChange(
                          activePage + 1 < pagesCount ? activePage + 1 : activePage
                        )
                      }
                    >
                      <div className={styles.thumbnails}>
                        {filteredArr.slice(activePage*mode, (activePage + 1) * mode ).map( (product) => (
                          <img
                            key={product.id}
                            src={product.photo}
                            alt=''
                            className = {product.photo === currentProduct.photo ? styles.thumbnail + ' ' + styles.active : styles.thumbnail}
                            onClick={e => {
                              e.preventDefault();
                              this.setNewCurrentProduct(product);
                            }}
                          />
                        ))}
                      </div>
                    </SwipeComponent>
                    <Button
                      className={styles.next}
                      onClick={e => {
                        e.preventDefault();
                        this.moveRight();
                      }}
                    >
                      <p>{'>'}</p>
                    </Button>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className={'col-6 ' + styles.picture}>
              <img src={products[2].photo} alt='prod3' />
              <div className={styles.details}>
                <h3>
                  from <span>${products[2].price}</span>
                </h3>
                <h1>{products[2].name}</h1>
                <Button variant='green'>Shop now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Gallery.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      userRate: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
      favorite: PropTypes.bool,
      photo: PropTypes.string,
      oldPrice: PropTypes.number,
    })
  ),
};
export default Gallery;