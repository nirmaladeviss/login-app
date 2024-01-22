import React, { Component } from 'react'

export default class SignInPage extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      confirmpassword: "",
      isLoggedin: false
    }
  }

  onSuccess = (e) => {
    e.preventDefault()
      this.setState({
        isLoggedin: true,
        username: e.target[0].value,
        password: e.target[1].value,
        confirmpassword: e.target[2].value        
      })
  }

  render() {
    return (
      <>
        {this.state.isLoggedin ? (
            <>
          <h1>Success!!</h1>
          </>
        ) : (
          <div className="container">
            <h1>Sign Up</h1>
            <form onSubmit={this.onSuccess}>
              <div style={{ paddingBottom: 10 }}>
                <label style={{paddingRight: 10}}>User Name</label>
                <input type='text' />
              </div>
              <div style={{ paddingBottom: 10 }}>
                <label style={{paddingRight: 10}}>Password</label>
                <input type='password' />
              </div>
              <div style={{ paddingBottom: 10 }}>
                <label style={{paddingRight: 10}}>Confirm Password</label>
                <input type='password' />
              </div>
              <button style={{marginTop: 10}} type='submit'>Sign Up</button>
              
            </form>
          </div>
        )}
      </>
    )
  }
}
