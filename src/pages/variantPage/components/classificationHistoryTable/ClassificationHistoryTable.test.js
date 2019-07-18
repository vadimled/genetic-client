import React from 'react';
import { shallow } from 'enzyme';
import ClassificationHistoryTable from 'classificationHistoryTable/ClassificationHistoryTable';

describe('<ClassificationHistoryTable />', () => {
  test('renders', () => {
    const wrapper = shallow(<ClassificationHistoryTable />);
    expect(wrapper).toMatchSnapshot();
  });
});
