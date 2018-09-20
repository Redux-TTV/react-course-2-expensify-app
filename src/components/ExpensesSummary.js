import React from 'react';
import numeral from 'numeral';
import getExpensesTotal from '../selectors/expenses-total.js';

export const ExpensesSummary = (expenses) => {
  const expensesTotal = getExpensesTotal(expenses.expenses);
  const expenseCount = expenses.expenses.length;
  return (
    <div>
      <p>
        Viewing {expenseCount} expenses totalling {numeral(expensesTotal/100).format('$0,0.00')}
      </p>
    </div>
  );
};
