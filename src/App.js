import firebase from "firebase/app";
import './App.css';
import "firebase/auth";
import firebaseConfig from "./firebase.config";


firebase.initializeApp(firebaseConfig);



function App() {
  var provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSingIn = () => {

  }


  return (
    <div className="App">
      
    <button onClick={handleGoogleSingIn}>Sign in google</button>

    </div>
  );
}

export default App;
