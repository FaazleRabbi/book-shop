import React, { useContext, useState } from "react";
import firebaseConfig from "./firebaseConfig";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import { UserContext } from "../../App";
import {
  BrowserRouter as Router,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  var googleProvider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        setLoggedInUser(result.user);
        history.replace(from);
      })
      .catch((error) => {
        // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // The email of the user's account used.
        // var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // ...
      });
  };
  return (
    <div className="h-100">
      <div className=" d-flex mt-5 justify-content-center align-items-center font-weight-bold">
        <button
          className="btn-outline-primary pr-5 h3  pl-5 pt-3 pb-3 rounded"
          onClick={handleGoogleLogin}
        >
          {" "}
          Login With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
