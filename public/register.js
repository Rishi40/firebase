import db from './config.js';

const submitBtn = document.querySelector('#submit');

let userName = document.querySelector('#userFullName');
let userEmail = document.querySelector('#userEmail');

let userNameInput = userName.value;
let userEmailInput = userEmail.value;

const studentData = db.collection("students");

submitBtn.addEventListener('click', function(){
    studentData.doc().set({
        name: userNameInput,
        email: userEmailInput,
    }).then(function(){
        console.log("Data saved");
        // location.href = "marks.html";
    }).catch(function(error){
        console.log(error);
    })
});

export default {userEmail};
