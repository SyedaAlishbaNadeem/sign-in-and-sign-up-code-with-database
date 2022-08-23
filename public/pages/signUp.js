
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  import {  getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";





  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA2KBcLwPaEtuay9USSD4dLI_PsPawNubM",
    authDomain: "authentication-63c13.firebaseapp.com",
    databaseURL: "https://authentication-63c13-default-rtdb.firebaseio.com",
    projectId: "authentication-63c13",
    storageBucket: "authentication-63c13.appspot.com",
    messagingSenderId: "616862812397",
    appId: "1:616862812397:web:c4f04b3f964672d4a164e4",
    measurementId: "G-RGYEW6PZX3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();









  //get ids first



//sign up function

window.signUp = function(){
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;

var obj = {
    email,
    password,
}


createUserWithEmailAndPassword(auth, obj.email, obj.password)
.then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    window.
    console.log('success');
    alert('Signed up successfully');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('error');
    alert('Enter valid details');
    // ..
  });


}


    
















