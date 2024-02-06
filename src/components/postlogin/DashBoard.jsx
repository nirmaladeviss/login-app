import React, { Component } from 'react'
import FormBasics from '../FormBasics'
import LifeCycleA from '../LifeCycleA'
import LifeCycleB from '../LifeCycleB'

export default class DashBoard extends Component {
  render() {
    return (
      <div>
        <FormBasics />
        <LifeCycleA />
      </div>
    )
  }
}
