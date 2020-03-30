import React from 'react';
import styles from './Review.module.scss';

import PropTypes from 'prop-types';

import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Review extends React.Component {
  static propTypes = {
    text: PropTypes.node,
    name: PropTypes.node,
    description: PropTypes.node,
    photo: PropTypes.string,
  };

  render() {
    const { text, name, description, photo } = this.props;
    return (
      <div className={styles.main}>
        <FontAwesomeIcon icon={faQuoteRight} />
        <p className={styles.text}>{text}</p>
        <div className={styles.client}>
          <div className={styles.photo}>
            <img src={photo} alt='client' />
          </div>
          <div className={styles.title}>
            <p className={styles.name}>{name}</p>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
