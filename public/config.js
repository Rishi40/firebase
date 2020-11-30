var firebaseConfig = {
    apiKey: "AIzaSyA7TWSJH12EQ3yoo1UnnRRSu9nXFCVZ5wo",
    authDomain: "examio-73509.firebaseapp.com",
    databaseURL: "https://examio-73509.firebaseio.com",
    projectId: "examio-73509",
    storageBucket: "examio-73509.appspot.com",
    messagingSenderId: "113101055074",
    appId: "1:113101055074:web:4b2780721012c98ffe1d3b"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
db.settings({ timestampsInSnapshots: true});

export default db;