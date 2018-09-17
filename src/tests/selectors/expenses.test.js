import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

//filter by text - expenses whose description contains text filter ('r')
test('Should filter by text value', () => {
  const filters = {
    text: 'r',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

//filter by start date - expenses whose date greater or equal to startDate
test('Should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

// should filter by endDate - expenses whose date less or equal to endDate
test('Should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  }
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]])
});

//should sort by date descending
test('Should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const action = selectExpenses(expenses, filters);
  expect(action).toEqual([expenses[2],expenses[0],expenses[1]])
});

//should sort by amount descending
test('Should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const action = selectExpenses(expenses, filters);
  expect(action).toEqual([expenses[2],expenses[1],expenses[0]])
});
