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
  isGirl: true,
  location: {
    city: 'London',
    country: 'United Kingdom'
  }
});

// database.ref().set('This is my data.');

database.ref('age').set(25);
database.ref('location/city').set('Taipei');

database.ref('attributes').set({
  height: 170,
  weight: 55
});

console.log('I made a firebase DB work!');
