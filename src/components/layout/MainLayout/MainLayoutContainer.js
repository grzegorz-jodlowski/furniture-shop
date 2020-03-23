import { connect } from 'react-redux';

import MainLayout from './MainLayout';

//import {  } from '../../../redux/';

const mapDispatchToProps = dispatch => ({
  //updateDeviceMode: deviceMode => dispatch(createActionUpdateDeviceMode(deviceMode)),
});

export default connect(null, mapDispatchToProps)(MainLayout);
