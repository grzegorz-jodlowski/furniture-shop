import React from 'react';
import styles from './Offer.module.scss';
import PropTypes from 'prop-types';

import Button from '../../common/Button/Button';
import ProductBoxOffer from '../../common/ProductBoxOffer/ProductBoxOffer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

class Offer extends React.Component {
  state = {
    activePage: 0,
    activePageInterval: 0,
    activeUpTo: 0,
    setUpTo: 0,
    setActive: false,
    setUpToActive: false,
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

  handleUpToRight(e) {
    e.preventDefault();
    if (this.state.setUpTo === 2) {
      this.setState({ activeUpTo: 2 });
    } else {
      this.setState({ setUpTo: this.state.setUpTo + 1 });
    }
    this.setState({
      activeUpTo: this.state.setUpTo + 1,
      setUpToActive: true,
    });
    setTimeout(() => {
      this.setState({ setUpToActive: false });
    }, 150);
  }

  handleUpToLeft(e) {
    e.preventDefault();
    if (this.state.setUpTo === 0) {
      this.setState({ activeUpTo: 0 });
    } else {
      this.setState({ setUpTo: this.state.setUpTo - 1 });
    }
    this.setState({
      activeUpTo: this.state.setUpTo,
      setUpToActive: true,
    });
    setTimeout(() => {
      this.setState({ setUpToActive: false });
    }, 150);
  }


  render() {
    const { products, upToProducts } = this.props;
    const { activePage } = this.state;

    const upTo = [];
    for (let i = 0; i < upToProducts.length; i++) {
      upTo.push(upToProducts[i].photo);
    }

    const dots = [];
    for (let i = 0; i < 3; i++) {
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
    const settings = {
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      dotsClass: styles.dot,
      pauseOnDotsHover: true,
    };

    return (
      <div className={styles.box}>
        <div className={styles.wrapper}>
          <div className={styles.hot}>
            <h2>Hot deals</h2>

          </div>
          <Slider {...settings}>
            {products.map(item => (
              <div
                key={item.id}
                className={this.state.setActive ? ' fade' : ' fade show'}
              >
                <ProductBoxOffer {...item} />
              </div>
            ))}
          </Slider>
        </div>
        <div className={styles.slider}>
          <img
            src={upToProducts[this.state.activeUpTo].photo}
            alt='furniture'
            className={this.state.setUpToActive ? ' fade' : ' fade show'}
          />
          <Button variant='nextBackBtn' onClick={e => this.handleUpToLeft(e)}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
          <Button variant='nextBackBtn' onClick={e => this.handleUpToRight(e)}>
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
          <div
            className={
              styles.title + (this.state.setUpToActive ? ' fade' : ' fade show')
            }
          >
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

Offer.propTypes = {
  products: PropTypes.array,
  upToProducts: PropTypes.array,
};

export default Offer;
