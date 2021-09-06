import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyApDjf0vgr3PQKglsBsd8F2H1BJFra5dto",
    authDomain: "clone-222e6.firebaseapp.com",
    projectId: "clone-222e6",
    storageBucket: "clone-222e6.appspot.com",
    messagingSenderId: "965772460393",
    appId: "1:965772460393:web:417ec88d70820f50b3bdf8",
    measurementId: "G-67E80PMYR4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };