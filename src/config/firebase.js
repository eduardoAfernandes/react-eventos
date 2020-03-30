import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyByAchcRJRe25erAQ-4YY7LvV5R9SgTIx4",
    authDomain: "eventos-c7058.firebaseapp.com",
    databaseURL: "https://eventos-c7058.firebaseio.com",
    projectId: "eventos-c7058",
    storageBucket: "eventos-c7058.appspot.com",
    messagingSenderId: "832391361906",
    appId: "1:832391361906:web:6110d4d28a57c4640a59eb"
  };
  
  export default firebase.initializeApp(firebaseConfig);