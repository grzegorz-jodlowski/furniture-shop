import { connect } from 'react-redux';

import Rating from './Rating';

import { createActionUpdateUserRate } from '../../../redux/productsRedux';

const mapDispatchToProps = dispatch => ({
  updateUserRate: (id, rating) => dispatch(createActionUpdateUserRate({ id, rating })),
});

export default connect(null,mapDispatchToProps)(Rating);
