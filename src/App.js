import React from 'react'
import { Github } from '@icons-pack/react-simple-icons'

import Footer from './components/Footer/Footer'
import Loader from './components/Loader'
import Logo from './components/Logo/Logo'
import Navbar from './components/Navbar'
import HomeSection from './components/Section/HomeSection'
import WhoAmISection from './components/Section/WhoAmISection'
import './styles/components/sections.sass'
import './styles/layout.sass'
import './styles/typography.sass'

const App = () => {
  return <>
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
    <WhoAmISection />

    <Footer />
  </>
}

export default App
