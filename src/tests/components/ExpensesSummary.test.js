import React from 'react';
import expenses from '../fixtures/expenses.js';
import {ExpensesSummary} from '../../components/ExpensesSummary.js';
import {shallow} from 'enzyme';

test('should render ExpensesSummary component correctly with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary component correctly with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={5} expensesTotal={2195984} />);
  expect(wrapper).toMatchSnapshot();
});
