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

database.ref().set({
  name: 'Agnes Ching',
  age: 20,
  stressLevel: 8,
  job: {
    title: 'Software Developer',
    company: 'Google'
  },
  location: {
    city: 'London',
    country: 'United Kingdom'
  }
}).then(() => {
  console.log('Data is saved');
}).catch((error) => {
  console.log('This failed', error);
});

database.ref().update({
  stressLevel: 6,
  'job/company': 'Amazon',
  'location/city': 'Seattle'
});

// database.ref('isGirl').set(null);

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Removed data.');
//   }).catch((error) => {
//     console.log('Remove failed:' + error);
//   });
