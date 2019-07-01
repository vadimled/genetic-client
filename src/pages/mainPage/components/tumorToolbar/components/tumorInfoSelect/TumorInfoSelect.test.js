import React from 'react';
import { shallow } from 'enzyme';
import TumorInfoSelect from './TumorInfoSelect';

describe('<TumorInfoSelect />', () => {
  test('renders', () => {
    const wrapper = shallow(<TumorInfoSelect />);
    expect(wrapper).toMatchSnapshot();
  });
});
