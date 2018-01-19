import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'some id',
    description: 'January Rent',
    note: 'This was the final paymemt for that address',
    amount: 55000,
    createAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endBy: undefined
  }
};
