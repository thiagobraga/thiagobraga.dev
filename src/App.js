import React, { Component } from 'react'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css';

class App extends Component {
  render() {
    return <div className="wrapper">
      <Navbar>
        <a href="/"><Logo /></a>
      </Navbar>

      <section className="parallax">
        <Logo large />
      </section>

      <Footer />
    </div>
  }
}

export default App
