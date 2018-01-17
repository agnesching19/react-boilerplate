// Object destructuring=======================================================
//

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

// const book = {
//   title: 'The Hope That Kills',
//   author: 'Ed James',
//   publisher: {
//     // name: 'Waterstones'
//   }
// }

// const { name: publisherName = 'Self-published' } = book.publisher;

// console.log(publisherName);

// Array destructuring=======================================================
//

const address = ['9 Nevitt House', 'London', 'UK', 'N1 6TD'];
const [, city, country = 'Taiwan'] = address;

console.log(`You are in ${city} ${country}.`);

const item = ['coffee (hot)', '£1.45', '£2.55', '£3.15'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}.`)
