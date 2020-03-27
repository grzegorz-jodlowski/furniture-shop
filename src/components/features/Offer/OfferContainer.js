import { connect } from 'react-redux';

import Offer from './Offer';

import { getOffer } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getOffer(state),
});

export default connect(mapStateToProps)(Offer);
