import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCD4pcxIhFTNYPOyAv8qg-CWOo3kquWk9k",
    authDomain: "crwn-db-10f94.firebaseapp.com",
    databaseURL: "https://crwn-db-10f94.firebaseio.com",
    projectId: "crwn-db-10f94",
    storageBucket: "crwn-db-10f94.appspot.com",
    messagingSenderId: "353101418019",
    appId: "1:353101418019:web:4bb0a50d0698b70b85ab96",
    measurementId: "G-G1JJYQHVVT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;