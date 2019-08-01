import React from 'react';
import { shallow } from 'enzyme';
import TabPaneContent from './TabPaneContent';

describe('<TabPaneContent />', () => {
  test('renders', () => {
    const wrapper = shallow(<TabPaneContent />);
    expect(wrapper).toMatchSnapshot();
  });
});
