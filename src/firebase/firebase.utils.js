import firebase from "firebase/app";
// we need the base import firebase, it gives us access to firestore and auth, they are automatically attached to firebase
// need auth and storage 
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDx4zVlfJuLwXgf_7-__oOVVmvTNAp5M20",
    authDomain: "phone-db-e2b10.firebaseapp.com",
    databaseURL: "https://phone-db-e2b10.firebaseio.com",
    projectId: "phone-db-e2b10",
    storageBucket: "phone-db-e2b10.appspot.com",
    messagingSenderId: "463818923556",
    appId: "1:463818923556:web:330459bac33327015102b1",
    measurementId: "G-JQ40NBKWGL"
};

// after inserting the object we call
firebase.initializeApp(config);

// for google authentication:
// we need to export it out anywhere that we need to use related to authentication 
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google auth utility:
const provider = new firebase.auth.GoogleAuthProvider(); //gives accest o auth libary
provider.setCustomParameters({prompt: 'select_account'}); //to trigger the google provider 
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

firebase.initializeApp(config);



