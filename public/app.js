
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  import { 
    getDatabase,
     ref, 
     set,
     push,
     onValue,

} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";






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
  const db = getDatabase();









//start our code





window.sendValue = function() {

    //sent values to databse 
var inp =  document.getElementById("question");
console.log(inp.value);


//its the path where we want to sent our data
//nodes name should pleural always
//hash is used so that data will go inside the node nested
//ref is used as refrence to sent data in nodes
var reference = ref(db, "questions/" );

//with push we have to create new refrence that create different key everytime and different nodes always
var newRef = push(reference);

//remember data will always go in the form of objects
set(newRef, {
text: inp.value,
time : new Date().getHours() + " : " + new Date().getMinutes(),
});
};





//get data on screen


var questionsData;

function getAllQuestions() {
    var reference = ref(db, "questions/");
    //this data and function is firebase personal function
    // this val() gives you th whole node code and arrays onjects
    onValue(reference, function(data){
        questionsData = Object.values( data.val());
        console.log(questionsData);
    renderQuestions();
})
}

getAllQuestions()




//its where you want to get the data 
function renderQuestions () {
    var parent = document.getElementById("dispQuestions");
    parent.innerHTML = '';
for (let i = 0; i < questionsData.length; i++) {
 parent.innerHTML += `<p class="orange rounded py-3 text-center"> ${questionsData[i].text} <br/>
 ${questionsData[i].time}</p>;`  
}
}







//go to sign up

window.goToSignUp = function() {
    window.location.href = "pages/signUp.html";
};

//go to login
window.goToLogIn = function() {
    window.location.href = "pages/login.html";
};













// //sign up function
// window.signUp = function() {

//     var email = document.getElementById('email');
//     var password = document.getElementById('password');

// var obj = {
//     email,
//     password,
// };
// console.log(obj);
// };





//admin panel
window.login = function() {
    var name  = document.getElementById('name').value;
    var password = document.getElementById('password').value;
if ( name == "alishba" && password == "123") {
    window.location.href = 'getdata.html';
}else{
    alert("Please enter a valid key")
}

}








