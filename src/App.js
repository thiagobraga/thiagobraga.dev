import React, { Component } from 'react'
import Loader from './components/Loader'
import Logo from './components/Logo/Logo'
import Navbar from './components/Navbar'
import { Github } from '@icons-pack/react-simple-icons'
import './styles/layout.sass'
import './styles/typography.sass'
import './styles/components/sections.sass'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Loader />

        <Navbar>
          <Logo />

          <a
            href="https://github.com/thiagobraga"
            target="blank"
            rel="noopener noreferrer">
            <Github />
          </a>
        </Navbar>

        <section className="home">
          <Logo large />

          <p>Developer</p>
          <p>Musician</p>
        </section>

        <section className="about">
          <h1>Whoami</h1>
        </section>
      </div>
    )
  }
}

export default App
