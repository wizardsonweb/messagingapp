import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCBwYaRn_49zxcOKqpfmrTYsLmzCndJRvo",
    authDomain: "whatsapp-yt-5fa02.firebaseapp.com",
    projectId: "whatsapp-yt-5fa02",
    storageBucket: "whatsapp-yt-5fa02.appspot.com",
    messagingSenderId: "116741375657",
    appId: "1:116741375657:web:6e7369a6c187d61c944bb8"
};


if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {db, auth, provider};