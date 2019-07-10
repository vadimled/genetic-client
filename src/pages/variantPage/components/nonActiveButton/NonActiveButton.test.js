import React from 'react';
import { shallow } from 'enzyme';
import NonActiveButton from './NonActiveButton';

describe('<NonActiveButton />', () => {
  test('renders', () => {
    const wrapper = shallow(<NonActiveButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
