// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLMdDwa_wKXK9nqJ_Vc0P7IzUg5uAqzes",
  authDomain: "login-for-hivemind.firebaseapp.com",
  projectId: "login-for-hivemind",
  storageBucket: "login-for-hivemind.appspot.com",
  messagingSenderId: "674861732608",
  appId: "1:674861732608:web:57baa4957ff22ed2ea99e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialise variables
const auth = firebase.auth()
const database = firebase.database()

//Set up our register function
function register(){
    email = document.getElementById('email').value 
    password = document.getElementById('password').value 
    full_name = document.getElementById('full_name').value 
    
}

//validate input fields
if()



function validate_email(email){
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if(expression.test(email)== true){
        return true
    } else {
            return false
        }
    }

function validate_password(password) {
    if(password < 6) {
        return false
    }
    else {
        return true
    }
}

function validate_field(field){
    if(field == null){
        return false

    }
    if (field.length <= 0){
        return false
    }
    else {
        return true
    }
}


