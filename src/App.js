import React, { Component } from 'react'
import Logo from './components/Logo'
import Footer from './components/Footer'
import './styles/layout.sass'
import './styles/typography.sass'
import './styles/components/parallax.sass'
import './styles/components/logo.sass'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <section className="parallax">
          <Logo large />
          <p>PHP &bull; CSS &bull; JavaScript</p>
          <p>DevOps</p>
          <p>Musician</p>
        </section>

        <section className="parallax">
          <Logo large />
          <p>PHP &bull; CSS &bull; JavaScript</p>
          <p>DevOps</p>
          <p>Musician</p>
        </section>

        <section className="parallax">
          <Logo large />
          <p>PHP &bull; CSS &bull; JavaScript</p>
          <p>DevOps</p>
          <p>Musician</p>
        </section>

        <Footer />
      </div>
    )
  }
}

export default App
