import { connect } from 'react-redux';

import Rating from './Rating';

// import { createActionAddFavorite } from '../../../redux/productsRedux';

const mapDispatchToProps = dispatch => ({
  // addFavorite: id => dispatch(createActionAddFavorite(id)),
});

export default connect(null, mapDispatchToProps)(Rating);
