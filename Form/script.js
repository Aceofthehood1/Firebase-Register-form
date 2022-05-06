const firebaseConfig = {
    apiKey: "AIzaSyC0pTruxk8OvpWCviLZtssl4HqJq3TmsVM",
    authDomain: "login-form-90cc5.firebaseapp.com",
    databaseURL: "https://login-form-90cc5-default-rtdb.firebaseio.com",
    projectId: "login-form-90cc5",
    storageBucket: "login-form-90cc5.appspot.com",
    messagingSenderId: "662720821061",
    appId: "1:662720821061:web:7f98fdd217bc0664f2302c"
  };

  //initialize firebas
  firebase.initializeApp(firebaseConfig);

let firestore_db = firebase.database().ref('Registration');

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fname, sname, age, email, password) {
/*
  let testRef = firebase.firestore().collection('Register').doc();
  testRef.set({
      fname: fname,
      sname: sname,
      age: age,
      email: email,
      password: password
  });
*/
  let newMessageRef = firestore_db.push();
    newMessageRef.set({
        fname: fname,
        sname: sname,
        age: age,
        email: email,
        password: password
    });

  console.log(fname, sname, age, email, password);
}


function submitForm() {
    //e.preventDefault();

    // Get values
    let fname = getInputVal('fname');
    let sname = getInputVal('sname');
    let age = getInputVal('age');
    let email = getInputVal('email');
    let password = getInputVal('password');

    // Save the message 
    saveMessage(fname, sname, age, email, password);

    // Reset the form
    //document.getElementById('login-form').reset();
}


document.getElementById('login-form').addEventListener("submit", submitForm);