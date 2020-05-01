import React from 'react'
import Logo from '../Logo/Logo'
import '../../styles/components/footer.sass'

const Footer = () => {
  return (
    <footer>
      <article>
        <Logo /><br />
        <small>📷 Paul Gilmore (Unsplash)</small>
      </article>

      <article>
        <ul>
          <li>
            <a href="https://stackoverflow.com/users/1096219/thiagobraga"
              target="_blank"
              rel="noopener noreferrer">StackOverflow</a>
          </li>
          <li>
            <a href="https://codepen.io/thiagobraga/"
              target="_blank"
              rel="noopener noreferrer">CodePen</a>
          </li>
          <li>
            <a href="https://dev.to/thiagobraga"
              target="_blank"
              rel="noopener noreferrer">Dev.to</a>
          </li>
          <li>
            <a href="https://github.com/thiagobraga"
              target="_blank"
              rel="noopener noreferrer">Github</a>
          </li>
        </ul>
      </article>
    </footer>
  )
}

export default Footer
