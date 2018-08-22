import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBAmzXyaknR8c7mE2Ncv5pa6roH93n42Sg",
    authDomain: "finances-4f7b3.firebaseapp.com",
    databaseURL: "https://finances-4f7b3.firebaseio.com",
    messagingSenderId: "439871581606",
    projectId: "finances-4f7b3",
    storageBucket: "finances-4f7b3.appspot.com"
  };
  

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  
  const auth = firebase.auth();
  
  export {
    auth,
  };