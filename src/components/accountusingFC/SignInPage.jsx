import React, { Component, useState } from 'react'
import LoginPage from './LoginPage'
import { useHistory, BrowserRouter, redirect, withRouter, useNavigate  } from 'react-router-dom';

const SignInPage = () => {
    const [ username, setusername ] = useState("")
    const [ password, setpassword ] = useState("")
    const [ confirmpassword, setconfirmpassword ] = useState("");
    const navigate = useNavigate()

    const onSuccess = (e) => {
        e.preventDefault()
        setusername(e.target[0].value);
        setpassword(e.target[1].value);
        setconfirmpassword(e.target[2].value);
        console.log(username, password);
        navigate('/login', {state: {username: e.target[0].value, password: e.target[1].value}})
    }
   
    return (
        <div className="container">
            <h1>Sign Up</h1>
            <form onSubmit={onSuccess}>
                <div style={{ paddingBottom: 10 }}>
                    <label style={{ paddingRight: 10 }}>User Name</label>
                    <input type='text' />
                </div>
                <div style={{ paddingBottom: 10 }}>
                    <label style={{ paddingRight: 10 }}>Password</label>
                    <input type='password' />
                </div>
                <div style={{ paddingBottom: 10 }}>
                    <label style={{ paddingRight: 10 }}>Confirm Password</label>
                    <input type='password' />
                </div>
                <button style={{ marginTop: 10 }} type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignInPage;

