import ExpenseList from './ExpenseList.js';
import ExpenseListFilters from './ExpenseListFilters.js';
import React from 'react';
import selectExpenses from '../selectors/expenses.js';
import {connect} from 'react-redux';
import ExpensesSummary from './ExpensesSummary.js';

const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
