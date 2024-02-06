import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor() {
        super()
        this.state = {
            name: ""
        }
        console.log("LifecycleB constructor");
    }
    static getDerivedStateFromProps(state, props) {
        console.log("LifecycleB getDerivedStateFromProps");
        return null;
    }
    componentDidMount(){
        console.log("lifecycleB componentDidMount");
    }
  render() {
      console.log("LifecycleB render");
    return (
      <div>LifeCycleB     </div>
    )
  }
}

export default LifeCycleB