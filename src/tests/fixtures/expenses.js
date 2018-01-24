import moment from 'moment';

export default [{
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
