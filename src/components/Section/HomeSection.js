'use client'
import React, { useEffect, useState } from 'react'
import TextLoop from 'react-text-loop'
import Logo from '../../components/Logo/Logo'

const HomeSection = () => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, [])

  return (
    <section className="home" style={{ backgroundPositionY: -offset / 5 }}>
      <Logo large />

      <div>
        PHP <TextLoop interval={10000}>
          <span>developer</span>
          <span>debugger</span>
        </TextLoop> · JavaScript · CSS
      </div>

      <div>
        DevOps <TextLoop
          springConfig={{ stiffness: 40, damping: 10 }}
          interval={8000}>
          <span>evangelist</span>
          <span>enthusiast</span>
          <span>engineer?</span>
          <span>enhancer</span>
          <span>embracer</span>
        </TextLoop>
      </div>

      <div>Musician</div>
    </section>
  )
}

export default HomeSection
