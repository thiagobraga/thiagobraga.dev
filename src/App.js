import React from 'react'
import { Github } from '@icons-pack/react-simple-icons'

import HomeSection from './components/Section/HomeSection'
import WhoAmISection from './components/Section/WhoAmISection'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader'
import Logo from './components/Logo/Logo'
import Navbar from './components/Navbar'
import './styles/components/sections.sass'
import './styles/layout.sass'
import './styles/typography.sass'

const App = () => {
  return (
    <div className="wrapper">
      <Loader />

      <Navbar>
        <Logo />

        <a href="https://github.com/thiagobraga"
          target="blank"
          rel="noopener noreferrer">
          <Github />
        </a>
      </Navbar>

      <HomeSection />
      {/* <WhoAmISection /> */}

      <Footer />
    </div>
  )
}

export default App
