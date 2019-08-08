import React from 'react';
import { shallow } from 'enzyme';
import ActionDeleteEvidence from './ActionDeleteEvidence';

describe('<ActionDeleteEvidence />', () => {
  test('renders', () => {
    const wrapper = shallow(<ActionDeleteEvidence />);
    expect(wrapper).toMatchSnapshot();
  });
});
