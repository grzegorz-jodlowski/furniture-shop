import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import ClientFeedback from '../../features/ClientFeedback/ClientFeedbackContainer';
import Offer from '../../features/Offer/OfferContainer';
import Gallery from '../../features/Gallery/Gallery';


const Homepage = () => (
  <div className={styles.root}>
    <Offer />
    <FeatureBoxes />
    <NewFurniture />
    <Gallery />
    <ClientFeedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
