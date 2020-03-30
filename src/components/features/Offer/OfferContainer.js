import { connect } from 'react-redux';

import Offer from './Offer';

import { getOffer, getUpTo } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getOffer(state),
  upToProducts: getUpTo(state),
});

export default connect(mapStateToProps)(Offer);
