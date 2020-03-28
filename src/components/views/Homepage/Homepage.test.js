import React from 'react';
import { shallow } from 'enzyme';
import Homepage from './Homepage';

import './matchMedia.mock'; // Must be imported before the tested file

describe('Homepage', () => {
  it('renders without crashing', () => {
    shallow(<Homepage />);
  });
});


