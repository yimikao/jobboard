import app from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCNbzQ7YE4OTVQJxUVP2qAFgbapqBgNz3o",
  authDomain: "job-listing-cc055.firebaseapp.com",
  projectId: "job-listing-cc055",
  storageBucket: "job-listing-cc055.appspot.com",
  messagingSenderId: "125176122000",
  appId: "1:125176122000:web:32f149b28abd1f7c646615",
};
// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export { firebase, firestore, app };
