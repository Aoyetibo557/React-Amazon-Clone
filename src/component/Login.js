import React, { useState } from 'react'
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const login = (event) => {
        event.preventDefault(); //stops refresh
        // Login Logic...
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            // Logged in redirect to hgomepage
            history.push("/");
        })
        .catch(e => alert(e.message));
    }

    const register = (event) => {
        event.preventDefault(); //stops refresh
        // Register Logic...
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // created a user and logged in
            history.push("/");
        })
        .catch((e) => alert(e.message));
    }

    return (
        <div className="_login">
            <Link to="/">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"                
                    alt="Login Amazon Logo"
                    className="_login__image"
                />
            </Link>

            <div className="_login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange ={event => setEmail(event.target.value)} type="text" placeholder="Enter Username/Email" />

                    <h5>Password</h5>
                    <input value={password} onChange ={event => setPassword(event.target.value)} type="password" placeholder="Enter Password" />

                    <button onClick={login} type="submit" className="_login__signInButton">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Conditions of Use Sale. 
                    Please see our Privacy Notice, Our Cookies and our Intrest-Based Ads Notice.
                </p>
                <button onClick={register} className="_login__registerButton"> Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
