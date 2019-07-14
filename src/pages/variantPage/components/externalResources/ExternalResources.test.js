import React from 'react';
import { shallow } from 'enzyme';
import ExternalResources from './ExternalResources';

describe('<ExternalResources />', () => {
  test('renders', () => {
    const wrapper = shallow(<ExternalResources />);
    expect(wrapper).toMatchSnapshot();
  });
});
