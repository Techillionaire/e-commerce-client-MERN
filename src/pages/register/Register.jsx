import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';

const Register = () => {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const navigate = useNavigate();


    const register = async  (event) => {
        event.preventDefault(); // stops the refresh! very important!
        // register logic goes hereimport { Link } from 'react-router-dom';

        try{
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
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
        <h1>Register</h1>
        <form>
            <h5>Email</h5>
            <input value={registerEmail} onChange={event => setRegisterEmail(event.target.value)} type="email" />
            <h5>Password</h5>
            <input value={registerPassword} onChange={event => setRegisterPassword(event.target.value)} type="password" />
            <button onClick={register} type="submit" className="login__signInButton">Register</button>
        </form>
        <p>Already have an account?</p>
        <Link to={`/login`}><button className="login__registerButton">Sign in to your Amazon account</button></Link>
    </div>
</div>
  )
}

export default Register