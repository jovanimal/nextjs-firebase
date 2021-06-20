import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCaIHVMMh7rDrU1-3HZCeQ9XvriJSdwDd4',
  authDomain: 'nextjs-firebase-e4dcd.firebaseapp.com',
  projectId: 'nextjs-firebase-e4dcd',
  storageBucket: 'nextjs-firebase-e4dcd.appspot.com',
  messagingSenderId: '632654627341',
  appId: '1:632654627341:web:2788abf47fb54c1b508b44',
  measurementId: 'G-CF5MGCSD6L',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
