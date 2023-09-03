import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyBn-CHFmvOoJN9sU0AjNAujxuKkv6HNBsY",
    authDomain: "contact-form-4b529.firebaseapp.com",
    projectId: "contact-form-4b529",
    storageBucket: "contact-form-4b529.appspot.com",
    messagingSenderId: "937515560636",
    appId: "1:937515560636:web:fe4a4d2dea8cf7eb4ceab9"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();