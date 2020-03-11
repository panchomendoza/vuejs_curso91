const firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwrY4dF8XlT8BZBLdlInExtdh8kas9P7A",
  authDomain: "facebook-330b5.firebaseapp.com",
  databaseURL: "https://facebook-330b5.firebaseio.com",
  projectId: "facebook-330b5",
  storageBucket: "facebook-330b5.appspot.com",
  messagingSenderId: "558581005343",
  appId: "1:558581005343:web:36bb47458dd97e331a692a",
  measurementId: "G-Z458KWBJKG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { firebase, db, auth, storage };