import React, { Component } from 'react'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import './styles/layout.sass'
import './styles/typography.sass'
import './styles/components/sections.sass'

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Loader />

        <Navbar>
          <Logo />
        </Navbar>

        <section className="first">
          <Logo large />

          <p>Developer</p>
          <p>Musician</p>
        </section>

        <Footer />
      </div>
    )
  }
}
