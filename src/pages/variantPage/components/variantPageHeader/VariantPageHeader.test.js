import React from 'react';
import { shallow } from 'enzyme';
import VariantPageHeader from './VariantPageHeader';

describe('<VariantPageHeader />', () => {
  test('renders', () => {
    const wrapper = shallow(<VariantPageHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
