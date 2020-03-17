import { connect } from 'react-redux';

import ProductBox from './ProductBox';

import { createActionAddFavorite } from '../../../redux/productsRedux';

const mapDispatchToProps = dispatch => ({
  addFavorite: id => dispatch(createActionAddFavorite(id)),
});

export default connect(null, mapDispatchToProps)(ProductBox);
