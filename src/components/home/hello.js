import React, { Component } from 'react'

export default class Hello extends Component {
  render() {
    const { hello } = this.props
    return (
      <div>
        <span>{hello}</span>
        <button onClick={() => this.props.testAction()}>Click me!</button>
      </div>
    )
  }
}
