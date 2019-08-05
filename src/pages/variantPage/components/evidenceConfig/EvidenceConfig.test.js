import React from 'react';
import { shallow } from 'enzyme';
import EvidenceConfig from './EvidenceConfig';

describe('<EvidenceConfig />', () => {
  test('renders', () => {
    const wrapper = shallow(<EvidenceConfig />);
    expect(wrapper).toMatchSnapshot();
  });
});
