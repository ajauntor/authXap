import firebase from "firebase/app";
import './App.css';
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useState } from "react";


firebase.initializeApp(firebaseConfig);



function App() {
  const [user, setUser] = useState({});
  var provider = new firebase.auth.GoogleAuthProvider();
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


  return (
    <div className="App">

      <h2>User log in or sign up</h2>
      
    <button onClick={handleGoogleSingIn}>Sign in google</button>

    <h1>Welcome, {user.displayName}</h1>
    <img src={user.photoURL} alt=""/>

    </div>
  );
}

export default App;
