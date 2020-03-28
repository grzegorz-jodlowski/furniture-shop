import React from 'react';
import styles from './ClientFeedback.module.scss';
import PropTypes from 'prop-types';

import Review from '../../common/Review/Review';
import SwipeComponent from '../../common/ SwipeComponent/SwipeComponent';

class ClientFeedback extends React.Component {
  state = {
    activePage: 0,
    setActive: false,
  };

  static propTypes = {
    reviews: PropTypes.array,
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

  render() {
    const { reviews } = this.props;
    const { activePage } = this.state;

    const pagesCount = Math.ceil(reviews.length / 1);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}>page {i}</a>
        </li>
      );
    }
    return (
      <div className='container'>
        <div className={'col-lg-auto col-12 ' + styles.main}>
          <h3>Client Feedback</h3>
          <div className='d-flex flex-wrap'>
            <div className={styles.shortLine}></div>
            <div className={styles.line}></div>
            <div className={styles.dots}>
              <ul>{dots}</ul>
            </div>
          </div>
          <SwipeComponent
            itemsCount={pagesCount}
            activeItem={this.state.activePage}
            swipeAction={this.handlePageChange.bind(this)}
          >
            {reviews.slice(activePage * 1, (activePage + 1)).map(review => (
              <div className={styles.wrapper +
                (this.state.setActive ? ' fade' : ' fade show')} key={review.id}>
                <Review {...review} />
              </div>
            ))}
          </SwipeComponent>
        </div>
      </div>
    );
  }
}

export default ClientFeedback;
