import selectExpenses from '../../selectors/expenses.js';
import moment from 'moment';

const expenses = [{
  id: '1',
  description: 'Whisky',
  note: '',
  amount: 1600,
  createdAt: 0
}, {
  id: '2',
  description: 'Shirt',
  note: '',
  amount: 3500,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Apples',
  note: '',
  amount: 195,
  createdAt: moment(0).add(4, 'days').valueOf()
}];

test('should filter by text value', () => {
  const filters = {
    text: 'h',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[0], expenses[1] ]);
});

test('should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[0] ]);
});

test('should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days')
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[0], expenses[1] ]);
});

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ]);
});

test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[1], expenses[0], expenses[2] ]);
});

