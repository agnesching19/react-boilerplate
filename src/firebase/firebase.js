import * as firebase from 'firebase';

// const config = {
//   apiKey: process.env.FIREBASE_APY_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
// };

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
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
