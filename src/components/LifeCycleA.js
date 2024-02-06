import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

export class LifeCycleA extends Component {
    constructor() {
        super()
        this.state = {
            name: ""
        }
        console.log("LifecycleA constructor");
    }
    static getDerivedStateFromProps(state, props) {
        console.log("LifecycleA getDerivedStateFromProps");
        return null;
    }
    componentDidMount(){
        console.log("lifecycleA componentDidMount");
    }
  render() {
      console.log("LifecycleA render");
    return (
      <div>LifeCycleA
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA