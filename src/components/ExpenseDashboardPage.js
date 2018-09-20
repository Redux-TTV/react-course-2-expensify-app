import ExpenseList from './ExpenseList.js';
import ExpenseListFilters from './ExpenseListFilters.js';
import React from 'react';
import selectExpenses from '../selectors/expenses.js';
import {connect} from 'react-redux';
import {ExpensesSummary} from './ExpensesSummary.js';

const ExpenseDashboardPage = (props) => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
    <ExpensesSummary expenses={props.expenses}/>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps) (ExpenseDashboardPage);
