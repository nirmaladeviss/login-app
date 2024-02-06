import React, { Component } from 'react'
import LoginPage from './LoginPage'
import { useHistory, BrowserRouter, redirect, withRouter } from 'react-router-dom';


class SignInPage extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            confirmpassword: "",
            isLoggedin: false,
        }
    }

    onSuccess = (e) => {
        e.preventDefault()
        const history = this.props;
     
        this.setState({
            isLoggedin: true,
            username: e.target[0].value,
            password: e.target[1].value,
            confirmpassword: e.target[2].value,
        }, ()=>{
            history.push('/login', {
                signinstate: this.state
            })
        })
       
        // window.location.href = 'http://localhost:3000/login'  
    }

   

    render() {
        return (
            <>
           
                <div className="container">
                    <h1>Sign Up</h1>
                    <form onSubmit={this.onSuccess}>
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
                        <button style={{ marginTop: 10 }} onClick={this.handlesuccess} type='submit'>Sign Up</button>
                    </form>
                </div>
                {/* <LoginPage username={this.state.username} password={this.state.password} /> */}
                        
            </>
        )
    }
}

export default withRouter(SignInPage) ;