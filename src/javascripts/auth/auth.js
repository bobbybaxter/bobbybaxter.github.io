import firebase from 'firebase/app';
import 'firebase/auth';
import apiKeys from '../helpers/apiKeys.json';

const initializeFirebase = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
};

export default { initializeFirebase };
