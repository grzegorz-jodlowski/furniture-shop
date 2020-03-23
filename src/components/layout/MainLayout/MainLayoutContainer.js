import { connect } from 'react-redux';

import MainLayout from './MainLayout';

//import {  } from '../../../redux/';

const mapDispatchToProps = dispatch => ({
  //addFavorite: id => dispatch(createActionAddFavorite(id)),
});

export default connect(null, mapDispatchToProps)(MainLayout);
