import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Object.defineProperty(global, 'Node', {
    value: {firstElementChild: 'firstElementChild'}
  })
  
configure({ adapter: new Adapter() });