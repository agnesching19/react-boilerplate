import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDZiOBFHPhL2eTV-VBkkpQOCZ7wssLPdO0",
  authDomain: "expensify-7fc18.firebaseapp.com",
  databaseURL: "https://expensify-7fc18.firebaseio.com",
  projectId: "expensify-7fc18",
  storageBucket: "expensify-7fc18.appspot.com",
  messagingSenderId: "280545481821"
};

firebase.initializeApp(config);

const database = firebase.database();

const onValueChange = database.ref().on('value', (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
}, (error) => {
  console.log('Error with data fetching', error);
});

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(22);
// }, 10500);

// database.ref('location/country')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log('Error fetching data.', error);
//   });

// database.ref().set({
//   name: 'Agnes Ching',
//   age: 20,
//   stressLevel: 8,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'London',
//     country: 'United Kingdom'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((error) => {
//   console.log('This failed', error);
// });

// database.ref().update({
//   stressLevel: 6,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref('isGirl').set(null);

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Removed data.');
//   }).catch((error) => {
//     console.log('Remove failed:' + error);
//   });
