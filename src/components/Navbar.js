'use client'
import React, { useEffect, useState } from 'react'
import '../styles/components/navbar.sass'

const Navbar = (props) => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, [])

  let opacity = 0.25
  let alpha = offset < 100 ? opacity : offset * opacity / 100
  let style = { backgroundColor: `rgba(53, 56, 64, ${Math.min(alpha, 1)})` }

  return (
    <nav className="navbar" style={style}>
      <div className="container">
        {props.children}
      </div>
    </nav>
  )
}

export default Navbar
