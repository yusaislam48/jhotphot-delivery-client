import React, { useContext } from 'react';
import "./Login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from '../FirebaseConfig/firebase.config';
import { UserContext } from '../../../App';
import Navbar from '../../Home/Navbar/Navbar';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); 
 }



const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
       const handleGoogleSignIn = () =>{
           firebase.auth().signInWithPopup(provider)
           .then((result) => {
             /** @type {firebase.auth.OAuthCredential} */
             var credential = result.credential;
             var {displayName, email, photoURL} = result.user;
               const signedInUser = {
                   isSignedIn: true,
                   name: displayName,
                   email: email,
                   image: photoURL
               };
               setLoggedInUser(signedInUser);
               history.replace(from);
           }).catch((error) => {
   
           });
       }

    return (
        <div className="login-page">
            <Navbar></Navbar>
            <div className="registration-form">
            <form>
                <div className="form-icon">
                    <span><i className="icon icon-user"></i></span>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control item" id="email" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control item" id="password" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-block create-account">Login</button>
                </div>
            </form>
            <div className="social-media">
                <h5>Sign in with Google</h5>
                <div className="social-icons">
                    <h1 onClick={handleGoogleSignIn}><FontAwesomeIcon className='googleIcon' icon={faGoogle} /></h1>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;