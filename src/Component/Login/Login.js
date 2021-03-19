import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './fireBaseConflit';


firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        password: ''
      })


    const handelSubmit = () => {

    };

    const handelChange = (event) => {
        console.log(event.target.value)
    }

    return (
        <div>
            <h3>Create an account</h3>
            <form onSubmit={handelSubmit}>
                <input type="text" onBlur={handelChange} placeholder="Name" required />
                <br />
                <input type="email" onBlur={handelChange} placeholder="Email" name="email" id="" required />
                <br />
                <input type="password" onBlur={handelChange} name="password" id="" placeholder="Password" required />
                <br />
                <input type="submit" value="Creat an account" />
            </form>
        </div>
    );
};

export default Login;