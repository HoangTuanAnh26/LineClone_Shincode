import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAwyVH0zhPcFEVH9o_IDk3DEyqdequXGPA",
    authDomain: "line-clone-79933.firebaseapp.com",
    projectId: "line-clone-79933",
    storageBucket: "line-clone-79933.firebasestorage.app",
    messagingSenderId: "1015770102899",
    appId: "1:1015770102899:web:1d4ae2abd1ab6810093e06"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };