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

  render() {
    const { stars, userRate } = this.props;
    return [1, 2, 3, 4, 5].map(i => (
      <a key={i} href='#'>
        {i <= (userRate || stars) ? (
          <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
        )}
      </a>
    ));
  }
}

export default Rating;
