import React from 'react';
import { shallow } from 'enzyme';
import ConfirmationPage from './ConfirmationPage';

describe('<ConfirmationPage />', () => {
  test('renders', () => {
    const wrapper = shallow(<ConfirmationPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
