import React from 'react';
import styles from './ClientFeedback.module.scss';
import PropTypes from 'prop-types';

import Review from '../../common/Review/Review';

class ClientFeedback extends React.Component {
  state = {
    activePage: 0,
  };

  static propTypes = {
    reviews: PropTypes.array,
  };

  render() {
    const { activePage } = this.state;

    const dots = [];
    for (let i = 0; i < 3; i++) {
      dots.push(
        <li>
          <a className={i === activePage && styles.active}>page {i}</a>
        </li>
      );
    }
    const { reviews } = this.props;
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
          {reviews.map(review => (
            <Review key={review.id} {...review} />
          ))}
        </div>
      </div>
    );
  }
}

export default ClientFeedback;
