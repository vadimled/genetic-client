import React from 'react';
import { shallow } from 'enzyme';
import VariantPage from './VariantPage';

describe('<VariantPage />', () => {
  test('renders', () => {
    const wrapper = shallow(<VariantPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
