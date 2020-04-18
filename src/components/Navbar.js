import React, { Component } from 'react'
import '../styles/components/navbar.sass'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          {this.props.children}
        </div>
      </nav>
    )
  }
}

export default Navbar
