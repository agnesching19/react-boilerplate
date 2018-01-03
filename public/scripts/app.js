'use strict';

function square(x) {
  return x * x;
};

console.log(square(3));

// const squareArrow = (x) => {
//   return x * x;
// };

var squareArrow = function squareArrow(x) {
  return x * x;
};

console.log(squareArrow(10));

// Challenge of this video

// const getFirstName = (y) => {
//   return y.split(' ')[0];
// };

var getFirstName = function getFirstName(y) {
  return y.split(' ')[0];
};

console.log(getFirstName('Agnes Ching'));
