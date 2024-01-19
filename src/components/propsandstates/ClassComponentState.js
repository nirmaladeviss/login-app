import React, { Component } from 'react'

export default class ClassComponentState extends Component {
    constructor() {
        super()
        this.state = {
            message: "Welcome to our channel"
        }
    }
    changeText() {
        this.setState({
            message: "Thank you for subscribing!"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=> this.changeText()}>Subscribe</button>
      </div>
    )
  }
}
