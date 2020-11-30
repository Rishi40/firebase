import db from './config.js';
import userEmail from './register.js';

const submitBtn = document.querySelector('#submit');

let examId1 = document.querySelector('#examIds1');
let subject1marks = document.querySelector('#marksS1');
let totalSubject1marks = document.querySelector('#totalmarksS1');

let examId2 = document.querySelector('#examIds2');
let subject2marks = document.querySelector('#marksS2');
let totalSubject2marks = document.querySelector('#totalmarksS2');

let examId3 = document.querySelector('#examIds3');
let subject3marks = document.querySelector('#marksS3');
let totalSubject3marks = document.querySelector('#totalmarksS3');

//search by email,find doc, put here.

const studentData = db.collection("students");
console.log(userEmail);
const studentId = studentData.where("email", "==", userEmail.value);
console.log(studentId);

const examMarks = db.collection("students").doc(studentId).collection("exams")

// var batch = db.batch();

submitBtn.addEventListener('click', function(){
    let examId1value = examId1.value;
    let subject1marksvalue = subject1marks.value;
    let totalSubject1marksvalue = totalSubject1marks.value;

    let examId2value = examId2.value;
    let subject2marksvalue = subject2marks.value;
    let totalSubject2marksvalue = totalSubject2marks.value;

    let examId3value = examId3.value;
    let subject3marksvalue = subject3marks.value;
    let totalSubject3marksvalue = totalSubject3marks.value;

    //batch operation

    examMarks.add({
        examId: examId1value,
        marksObtained: subject1marksvalue,
        maxMarks: totalSubject1marksvalue,       
    })

    examMarks.add({
        examId: examId2value,
        marksObtained: subject2marksvalue,
        maxMarks: totalSubject2marksvalue,       
    })

    examMarks.add({
        examId: examId3value,
        marksObtained: subject3marksvalue,
        maxMarks: totalSubject3marksvalue,       
    })
})

// location.href = "leaderboard.html";
