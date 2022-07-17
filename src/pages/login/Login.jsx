import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  signInWithEmailAndPassword } from "firebase/auth";

import "./login.css"
import { auth } from '../../firebase';

const Login = () => {
    const navigate = useNavigate();
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const login = async (event) => {
        event.preventDefault(); // stops the refresh! very important!
        //login logic goes here
        try{
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            console.log(user);
            navigate("/")
        } catch (error){
            console.log(error);
        }
        

        
    };


    

    

  return (
    <div className="login">
    <Link to="/">
        <img
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt=""
        />
    </Link>
    <div className="login__container">
        <h1>Sign in</h1>
        <form>
            <h5>Email</h5>
            <input value={loginEmail} onChange={event => setLoginEmail(event.target.value)} type="email" />
            <h5>Password</h5>
            <input value={loginPassword} onChange={event => setLoginPassword(event.target.value)} type="password" />
            <button onClick={login} type="submit" className="login__signInButton">Sign in</button>
        </form>
        <p>New to Amazon?</p>
        <Link to={`/register`}><button className="login__registerButton">Create a new  Amazon account</button></Link>
    </div>
</div>
  )
}

export default Login