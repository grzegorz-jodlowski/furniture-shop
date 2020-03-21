import React from 'react';
import PropTypes from 'prop-types';
import styles from './Rating.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

class Rating extends React.Component {
  state = {
    tempRate: null,
  };

  static propTypes = {
    id: PropTypes.string,
    stars: PropTypes.number,
    userRate: PropTypes.number,
    updateUserRate: PropTypes.func,
  };

  rate(rating) {
    this.props.updateUserRate(this.props.id, rating);
  }

  starOver(rating) {
    this.setState({
      tempRate: rating,
    });
  }

  starOut() {
    this.setState({
      tempRate: null,
    });
  }

  render() {
    const { stars, userRate } = this.props;
    return [1, 2, 3, 4, 5].map(i => (
      <a key={i}>
        {i <= (userRate || stars) ? (
          <FontAwesomeIcon
            className={`${this.state.tempRate >= i ? styles.tempRate : ''} ${
              userRate ? styles.userRate : ''
            }`}
            onClick={this.rate.bind(this, i)}
            icon={faStar}
            onMouseOver={this.starOver.bind(this, i)}
            onMouseOut={this.starOut.bind(this)}
          >
            {i} stars
          </FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon
            className={`${this.state.tempRate >= i ? styles.tempRate : ''} ${
              userRate ? styles.userRate : ''
            }`}
            onClick={this.rate.bind(this, i)}
            icon={farStar}
            onMouseOver={this.starOver.bind(this, i)}
            onMouseOut={this.starOut.bind(this)}
          >
            {i} stars
          </FontAwesomeIcon>
        )}
      </a>
    ));
  }
}

export default Rating;
