import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class MainLayout extends React.Component {
  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    let displayMode;
    if (window.innerWidth <= 425) {
      displayMode = 'phone';
    } else if (window.innerWidth > 425 && window.innerWidth < 1024) {
      displayMode = 'tablet';
    } else {
      displayMode = 'laptop';
    }
    this.props.updateDeviceMode(displayMode);
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node,
  updateDeviceMode: PropTypes.func,
};

export default MainLayout;
