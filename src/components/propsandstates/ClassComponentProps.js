import React, { Component } from 'react'

export default class ClassComponentProps extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name} works in {this.props.company}
        {this.props.children}
        </h1>
      </div>
    )
  }
}
