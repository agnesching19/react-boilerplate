// const person = {
//   name: 'Agens',
//   age: 18,
//   location: {
//     city: 'London',
//     temp: 7
//   }
// };

// const { name : firstname = 'Anoymous', age } = person;
// console.log(`${firstname} is ${age}.`);

// // const name = person.name;
// // const age = person.age;

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It is ${temperature} in ${city}.`);
// }

const book = {
  title: 'The Hope That Kills',
  author: 'Ed James',
  publisher: {
    // name: 'Waterstones'
  }
}

const { name: publisherName = 'Self-published' } = book.publisher;

console.log(publisherName);
