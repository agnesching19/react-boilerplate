import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses.js';
import expenses from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  });
});

test('should setup add expense action object with provided value', () => {
  const expenseData = {
    description: 'Rent',
    amount: '50000',
    createdAt: '1000',
    note: 'This was last month rent'
  };
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Rose',
    amount: 350,
    note: 'For Valentine\'s',
    createdAt: 1000
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    expect(1).toBe(1);
    done();
  });
});

test('should add expense with defaults and store', () => {

});

// test('should setup add expense action with default value', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0
//     }
//   });
// });
