import React, { Component } from 'react'
import Logo from './components/Logo'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './styles/layout.sass'
import './styles/typography.sass'
import './styles/components/sections.sass'
import './styles/components/logo.sass'

class App extends Component {
  render() {
    return (
      <>
        <Navbar>
          <Logo />
        </Navbar>

        <div className="wrapper">
          <section className="first-section">
            <Logo large />
          </section>

          <section className="second-section">
            <h2>Another Great Section</h2>
          </section>

          <Footer />
        </div>
      </>
    )
  }
}

export default App
