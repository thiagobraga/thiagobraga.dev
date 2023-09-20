import React from 'react';
import { FaDev, FaGithub, FaStackOverflow } from 'react-icons/fa';
import url from '../../services/UrlService';
import Logo from '../Logo/Logo';
import '../../styles/components/navbar.sass';

export default function Navbar(props) {
  const { style } = props;
  return (
    <nav className='navbar' style={style}>
      <div className='container'>
        <Logo />

        <div className='social-icons'>
          <a href={url.github} rel='noopener noreferrer' target='blank'>
            <FaGithub />
          </a>

          <a href={url.devto} rel='noopener noreferrer' target='blank'>
            <FaDev />
          </a>

          <a href={url.stackoverflow} rel='noopener noreferrer' target='blank'>
            <FaStackOverflow />
          </a>
        </div>
      </div>
    </nav>
  );
}
