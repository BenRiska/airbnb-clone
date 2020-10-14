import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBEd7JhoNPXisIUWNx-GwhMkLVGRM7Dd_o",
    authDomain: "airbnb-clone-7df43.firebaseapp.com",
    databaseURL: "https://airbnb-clone-7df43.firebaseio.com",
    projectId: "airbnb-clone-7df43",
    storageBucket: "airbnb-clone-7df43.appspot.com",
    messagingSenderId: "1065779106773",
    appId: "1:1065779106773:web:1e18fff8e312976304e35c",
    measurementId: "G-W3JQF5MYR9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;

