import React from 'react';
import { shallow } from 'enzyme';
import TableSourceDescription from './TableSourceDescription';

describe('<TableSourceDescription />', () => {
  test('renders', () => {
    const wrapper = shallow(<TableSourceDescription />);
    expect(wrapper).toMatchSnapshot();
  });
});
