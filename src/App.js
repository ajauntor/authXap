import firebase from "firebase/app";
import './App.css';
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useState } from "react";


firebase.initializeApp(firebaseConfig);



function App() {
  const [user, setUser] = useState({});
  var provider = new firebase.auth.GoogleAuthProvider();
  var fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleGoogleSingIn = () => {
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {

    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
    setUser(user);
    console.log(user);


  })


  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorCode, errorMessage, email, credential )
  });
  }
const handleFacebookSignIn = () => {
  firebase
  .auth()
  .signInWithPopup(fbProvider)
  .then((result) => {
    var credential = result.credential;
    var user = result.user;
    var accessToken = credential.accessToken;
    console.log(user);
    setUser(user);
  })

  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorCode, errorMessage, email, credential);
  });
}

  return (
    <div className="App">
      <h2 style={{fontSize:"50px", letterSpacing:"6px", fontVariant:"small-caps", color:"whitesmoke"}}>User log in or sign up</h2>
      
    <button style={{padding:"8px 16px"}} onClick={handleGoogleSingIn}>Sign in google</button>
    <br/>
    <button style={{padding:"8px 16px", marginTop:"5px"}} onClick={handleFacebookSignIn}>login using facebook</button>

    <h1 style={{color:"whitesmoke"}} > Welcome, <span style={{color:"blue"}}> {user.displayName} </span> </h1>
    <img src={user.photoURL} alt=""/>


    

    </div>
  );
}

export default App;
