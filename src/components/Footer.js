import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer>
        Thiago Braga
        {this.props.children}
      </footer>
    )
  }
}
