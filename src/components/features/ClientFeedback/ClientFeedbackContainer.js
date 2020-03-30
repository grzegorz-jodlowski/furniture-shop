import { connect } from 'react-redux';

import ClientFeedback from './ClientFeedback';

import { getReview } from '../../../redux/reviewRedux.js';

const mapStateToProps = state => ({
  reviews: getReview(state),
});

export default connect(mapStateToProps)(ClientFeedback);
