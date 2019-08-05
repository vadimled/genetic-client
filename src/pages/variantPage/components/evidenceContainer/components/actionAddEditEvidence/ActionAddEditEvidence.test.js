import React from 'react';
import { shallow } from 'enzyme';
import ActionAddEditEvidence from './ActionAddEditEvidence';

describe('<ActionAddEditEvidence />', () => {
  test('renders', () => {
    const wrapper = shallow(<ActionAddEditEvidence />);
    expect(wrapper).toMatchSnapshot();
  });
});
