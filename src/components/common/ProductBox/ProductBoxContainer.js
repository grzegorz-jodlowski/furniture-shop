import { connect } from 'react-redux';

import ProductBox from './ProductBox';

import { createActionAddFavorite } from '../../../redux/productsRedux';

const mapDispatchToProps = dispatch => ({
  addFavorite: favorite => dispatch(createActionAddFavorite(favorite)),
});

export default connect(mapDispatchToProps)(ProductBox);
