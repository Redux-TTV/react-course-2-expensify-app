import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';
import uuid from 'uuid';

test('Should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test('Should remove expense by ID', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]])
});

test('Should not remove expenses if ID not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

//should add expense
test('Should add expense', () => {
  const expense = {
    id: '100',
    description: 'test',
    amount: 15025,
    note: '',
    createdAt: moment()
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense])
});

//should edit expense
test('Should edit existing expense', () => {
  const amount = 165809;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

//should not not edit expense if id not found
test('Should not edit expenses if ID not found', () => {
  const amount = 65168196
  const action = {
    type: 'EDIT_EXPENSE',
    id: -1,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
