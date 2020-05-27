import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyCKooHGEn2sgo_W47r0uHDlTpumxpjBtU8",
  authDomain: "quickreact-f0974.firebaseapp.com",
  databaseURL: "https://quickreact-f0974.firebaseio.com",
  projectId: "quickreact-f0974",
  storageBucket: "quickreact-f0974.appspot.com",
  messagingSenderId: "638982657911",
  appId: "1:638982657911:web:e296a4b647c2f1ad3cf372"
};

firebase.initializeApp(firebaseConfig);
export default firebase;