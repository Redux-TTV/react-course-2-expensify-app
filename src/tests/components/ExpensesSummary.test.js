import expenses from '../fixtures/expenses.js';
import {ExpensesSummary} from '../../components/ExpensesSummary.js';
import React from 'react';
import {shallow} from 'enzyme';

test('should render ExpensesSummary component correctly', () => {
  const wrapper = shallow(<ExpensesSummary expenses={expenses}/>);
  expect(wrapper).toMatchSnapshot();
})
