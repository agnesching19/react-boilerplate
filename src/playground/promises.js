const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Agnes',
      age: 18
    });
    reject('Something went wrong!');
  }, 5000);
});

console.log('before');

promise.then((data) => {
  console.log('1', data);

  return 'some data';
}).then((str) => {
  console.log('Does this run?', str);
}).catch((error) => {
  console.log('error:', error);
});

console.log('after');
