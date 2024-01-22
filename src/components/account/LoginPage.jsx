import React, { Component } from 'react'

export default class LoginPage extends Component {
  constructor() {
    super()
    this.state = {
      username: "Nirmala",
      password: "Test@123",
      isLoggedin: false
    }
  }

  onSuccess = (e) => {
    e.preventDefault()
    if (this.state.username === e.target[0].value && this.state.password === e.target[1].value) {
      this.setState({
        isLoggedin: true
      })
    }
    else {
      console.log("error");
    }
  }

  render() {
    return (
      <>
        {this.state.isLoggedin ? (
          <h1>Logged in successfully</h1>
        ) : (
          <div className="container">
            <h1>Login In</h1>
            <form onSubmit={this.onSuccess}>
              <div style={{ paddingBottom: 10 }}>
                <label style={{paddingRight: 10}}>User Name</label>
                <input type='text' />
              </div>
              <div style={{ paddingBottom: 10 }}>
                <label style={{paddingRight: 10}}>Password</label>
                <input type='password' />
              </div>
              <button style={{marginTop: 10}} type='submit'>Login</button>
            </form>
          </div>
        )}
      </>
    )
  }
}
