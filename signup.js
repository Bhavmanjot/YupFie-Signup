const signupBtn = document.getElementById("signupbtn");

const txtEmail = document.getElementById('email');
const txtPassword = document.getElementById('password');
const userId = document.getElementById('name');

const database = firebase.database();
const rootRef = database.ref('users');
const auth = firebase.auth();

signupBtn.addEventListener("click", function(){

    var email = txtEmail.value;
    var pass = txtPassword.value;

    //Signing up
    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then((data) => {

      //send verification email
      sendVerificationEmail();
    }) 
    .catch(function(error) {
    // Handle Errors here.
    //var errorCode = error.code;
    var errorMessage = error.message;
    alert("Error :" + errorMessage);
    });

  });
  //verification email function
  var sendVerificationEmail = () => {
    auth.currentUser.sendEmailVerification()
    .then(() => {
      alert("Verification Email Sent! Check your mailbox.")
    })
    .catch(error => {
      alert("Error :" + errorMessage);
    })
  }      

  //DATABASE
  //'set' adds new data to he db
  signupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    let id = data.User.uid;

      function writeUserData(userId, name, email) {
        firebase.database().ref('Users/' + userId).set({
          Username: name,
          Email: email,
        });
      }
  }); 
