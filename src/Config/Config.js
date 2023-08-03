import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyChso0VqN6or5cpMI1OhCLx5ijniRA_BoQ",
    authDomain: "ecommerce-app-with-react.firebaseapp.com",
    projectId: "ecommerce-app-with-react",
    storageBucket: "ecommerce-app-with-react.appspot.com",
    messagingSenderId: "657349901134",
    appId: "1:657349901134:web:103a27f4790f6cde013c1f",
    measurementId: "G-NWRPQ6P8QS"
  };
  firebase.initializeApp(firebaseConfig);
 
  const auth=firebase.auth();
  const fs=firebase.firestore();
  const storage=firebase.storage();

  export{auth,fs,storage}