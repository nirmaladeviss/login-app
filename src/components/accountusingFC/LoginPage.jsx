import React, { useState } from 'react'
import { useLocation, Navigate, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [ username, setusername ] = useState("")
  const [ password, setpassword ] = useState("")
  const location = useLocation();
  const navigate = useNavigate()

  const onSuccess = (e) => {
    e.preventDefault()
    if (username === location.state.username && password === location.state.password) {
      navigate('/dashboard')
    }
    else {
      console.log("error");
      alert("The username/password entered is incorrect")
    }
  }

  console.log(location);

  return (
    <>
     
        <div className="container" >
          <h1>Login In FC</h1>
          <form onSubmit={onSuccess}>
            <div style={{ paddingBottom: 10 }}>
              <label style={{paddingRight: 10}}>User Name</label>
              <input type='text' value={username} onChange={(e) =>  setusername(
                 e.target.value)} />
            </div>
            <div style={{ paddingBottom: 10 }}>
              <label style={{paddingRight: 10}}>Password</label>
              <input type='password' value={password} onChange={(e) =>  setpassword(
                e.target.value)} />
            </div>
            <button style={{marginTop: 10}} type='submit'>Login</button>
          </form>
        </div>
      
    </>
  )
}

export default LoginPage;