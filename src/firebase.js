import firebase from 'firebase'

  const config = {
  apiKey: "AIzaSyAiI6Iloa9Pp_VdU3rRMcdfOlLpx26C2MI",
  authDomain: "bookshare-80b74.firebaseapp.com",
  databaseURL: "https://bookshare-80b74.firebaseio.com",
  projectId: "bookshare-80b74",
  storageBucket: "bookshare-80b74.appspot.com",
  messagingSenderId: "469942000623"
  };
  const db = firebase.initializeApp(config);
  export default db;