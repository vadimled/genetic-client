import React from 'react';
import ExternalResources from './ExternalResources';

describe('<ExternalResources />', () => {
  xtest('renders', () => {
    const wrapper = shallow(<ExternalResources />);
    expect(wrapper).toMatchSnapshot();
  });
});
