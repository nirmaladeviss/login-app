import React, { Component } from 'react'

export default class LoginPage extends Component {
  constructor(props) {
    super()
    this.state = {
      username: "",
      password: "",
      isLoggedin: false,
      
    }
  }

  onSuccess = (e) => {
    console.log(this.props.username, this.props.password, 
      );
    e.preventDefault()
    if (this.state.username === this.props.username && this.state.password === this.props.password) {
      this.setState({
        isLoggedin: true
      })
      window.location.href = 'http://localhost:3000/dashboard'
    }
    else {
      console.log("error");
      alert("The username/password entered is incorrect")
    }
  }

  // handlesuccess = () => {
  //   if(isLoggedin) {
  //             
  //   }
  // }
  render() {
    return (
      <>
        {this.state.isLoggedin ? (
          <h1>Logged in successfully</h1>
        ) : (
          <div className="container" >
            <h1>Login In</h1>
            <form onSubmit={this.onSuccess}>
              <div style={{ paddingBottom: 10 }}>
                <label style={{paddingRight: 10}}>User Name</label>
                <input type='text' value={this.state.username} onChange={(e) =>  this.setState({
                  username: e.target.value})} />
              </div>
              <div style={{ paddingBottom: 10 }}>
                <label style={{paddingRight: 10}}>Password</label>
                <input type='password' value={this.state.password} onChange={(e) =>  this.setState({
                  password: e.target.value})} />
              </div>
              <button style={{marginTop: 10}} type='submit'>Login</button>
            </form>
          </div>
        )}
      </>
    )
  }
}
