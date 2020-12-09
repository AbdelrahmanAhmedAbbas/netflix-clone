import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDD9E7oUaUBjbh9Q0XOG5XAnsCXgDImVXo",
  authDomain: "netflix-clone-e4714.firebaseapp.com",
  projectId: "netflix-clone-e4714",
  storageBucket: "netflix-clone-e4714.appspot.com",
  messagingSenderId: "611502366175",
  appId: "1:611502366175:web:d126ce1d5c5442650f786a",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
