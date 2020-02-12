import React, { Component } from 'react'
import '../styles/components/animation.sass'
import '../styles/components/logo.sass'

export default class Logo extends Component {
  render() {
    return (
      <span className={this.props.large ? 'logo large' : 'logo'}>
        Thiago <b>Braga</b>
      </span>
    )
  }
}
