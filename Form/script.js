const firebaseConfig = {
    apiKey: "AIzaSyC0pTruxk8OvpWCviLZtssl4HqJq3TmsVM",
    authDomain: "login-form-90cc5.firebaseapp.com",
    databaseURL: "https://login-form-90cc5-default-rtdb.firebaseio.com",
    projectId: "login-form-90cc5",
    storageBucket: "login-form-90cc5.appspot.com",
    messagingSenderId: "662720821061",
    appId: "1:662720821061:web:7f98fdd217bc0664f2302c"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);
/*
  //reference database
  let registerFormDB = firebase.database().ref('RegisterForm');
  document.getElementById('login-form').addEventListener('submit',submitForm);

  function submitForm(e){
      e.preventDefault();
      let fname    = getElementVal('fname');
      let sname    = getElementVal('sname');
      let age      = getElementVal('age');
      let email    = getElementVal('email');
      let password = getElementVal('password');

      console.log(fname,sname,age,email,password);
  }

  const getElementVal = (id) => {
      return document.getElementById(id).value;
  } */

  var push_to_firebase = function(data){
    alert("Thanks for sending a message. I'll try and get back to you as soon as possible.")
    const db = getFirestore(app);

    db.collection("Register").add({
        fname: data["fname"],
        sname: data["sname"],
        age  : data["age"],
        email: data["email"],
        password: data["password"]
    }).then(function(docRef) {
        console.log("Message sent, ID: ", docRef.id);
        location.reload();
    })
    .catch(function(error) {
        console.error("Message could not be sent: ", error);
    });
  }

  var contact_submit = function(){
    var fname = document.getElementById("fname");
    var sname = document.getElementById("sname");
    var age = document.getElementById("age");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    var data = {
      "fname" : fname.value,
      "sname" : sname.value,
      "age"   : age.value,
      "email" : email.value,
      "password"  : password.value
    }
    push_to_firebase(data);

  }

  document.getElementById("submit").addEventListener("click", contact_submit);
