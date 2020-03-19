import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

class Rating extends React.Component {
  static propTypes = {
    stars: PropTypes.number,
    userRate: PropTypes.number,
  };

  rate(rating) {
    console.log(rating);
    // this.setState({
    //   rating: rating,
    //   temp_rating: rating,
    // });
  }

  render() {
    const { stars, userRate } = this.props;
    return [1, 2, 3, 4, 5].map(i => (
      <a key={i}>
        {i <= (userRate || stars) ? (
          <FontAwesomeIcon onClick={this.rate.bind(this, i)} icon={faStar}>
            {i} stars
          </FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon onClick={this.rate.bind(this, i)} icon={farStar}>
            {i} stars
          </FontAwesomeIcon>
        )}
      </a>
    ));
  }
}

export default Rating;
