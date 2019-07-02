import React from 'react';
import { shallow } from 'enzyme';
import TumorInfoPercent from './TumorInfoPercent';

describe('<TumorInfoPercent />', () => {
  test('renders', () => {
    const wrapper = shallow(<TumorInfoPercent />);
    expect(wrapper).toMatchSnapshot();
  });
});
