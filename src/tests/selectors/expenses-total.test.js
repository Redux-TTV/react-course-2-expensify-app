import getExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses.js';

test('should return expenses-total correctly when expenses exist', () => {
  const result = getExpensesTotal(expenses);
  const total = expenses[0].amount+expenses[1].amount+expenses[2].amount;
  expect(result).toEqual(total);
});

test('should return expenses-total correctly when only one expense exists', () => {
  const result = getExpensesTotal([expenses[0]]);
  expect(result).toBe(expenses[0].amount);
});

test("should return expenses-total correctly when expenses don't exist", () => {
  const result = getExpensesTotal([]);
  expect(result).toEqual(0);
});
