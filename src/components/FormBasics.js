import React, { Component } from 'react'

export default class FormBasics extends Component {
    constructor() {
        super();
        this.state = {
            username:"",
            textarea:"",
            select:""
        }
        
    }
    handleUsernameChange = (e) => {
        this.setState(
            {
                username: e.target.value
            }
        )
    }
    handleTextarea = (e) => {
        this.setState(
            {
                textarea: e.target.value
            }
        )
    }
    handleSelect = (e) => {
        this.setState(
            {
                select: e.target.value
            }
        )
    }
    handleSubmit = (e) => {
        e.preventDefault();
        alert(`${this.state.username}, ${this.state.textarea}, ${this.state.select}`)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>UserName</label>
            <input type='text' value={this.state.username} onChange={this.handleUsernameChange} /> <br />
            <label>Textarea</label>
            <textarea value={this.state.textarea} onChange={this.handleTextarea}></textarea><br />
            <label>Select one</label>
            <select value={this.state.select} onChange={this.handleSelect}>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
            </select><br />
            <button type='submit' onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
