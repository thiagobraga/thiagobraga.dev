import React from 'react';
import {
  FaDev,
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaStackOverflow,
  FaTwitter,
} from 'react-icons/fa';
import url from '../../services/UrlService';
import Link from '../Link/Link';
import Logo from '../Logo/Logo';
import '../../styles/components/footer.sass';

export default function Footer(props) {
  const { style } = props;
  return (
    <footer style={style}>
      <div className='container'>
        <div>
          <Logo size='md' />

          <p>
            Olá, espero que tenha gostado do site. Obrigado pela sua visita. Eu
            sou um programador apaixonado por programar, curioso por aprender,
            amo os animais, sou muito apegado à minha família, eu amo minha
            namorada, tenho um cão chamado Chico e o gato Syd.
          </p>

          <p>
            Me escreva, vamos trocar ideias sobre projetos, ideias, falar sobre
            álbuns inesquecíveis de bandas, Chaves, cães.
          </p>

          <div className='social-icons'>
            <Link href={url.github}>
              <FaGithub />
            </Link>

            <Link href={url.devto}>
              <FaDev />
            </Link>

            <Link href={url.stackoverflow}>
              <FaStackOverflow />
            </Link>

            <Link href={url.instagram}>
              <FaInstagram />
            </Link>

            <Link href={url.facebook}>
              <FaFacebookSquare />
            </Link>

            <Link href={url.twitter}>
              <FaTwitter />
            </Link>
          </div>
        </div>

        <nav>
          <h6>DEV</h6>

          <ul>
            <li>
              <Link href={url.devto}>Dev.to</Link>
            </li>
            <li>
              <Link href={url.github}>Github</Link>
            </li>
            <li>
              <Link href={url.stackoverflow}>Stack Overflow</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link href={url.codepen}>CodePen</Link>
            </li>
            <li>
              <Link href={url.linkedin}>LinkedIn</Link>
            </li>
            <li>
              <Link href={url.gitlab}>Gitlab</Link>
            </li>
          </ul>
        </nav>

        <nav>
          <h6>MUSIC</h6>

          <ul>
            <li>
              <Link href={url.revel}>Revel</Link>
            </li>
            <li>
              <Link href={url.sociopata}>Sociopata</Link>
            </li>
            <li>
              <Link href={url.onemanbraga}>One Man Braga</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link href='https://github.com/thiagobraga'>Soundcloud</Link>
            </li>
            <li>
              <Link href='https://github.com/thiagobraga'>Bandcamp</Link>
            </li>
            <li>
              <Link href='https://youtube.com/user/thibraga06'>YouTube</Link>
            </li>
          </ul>
        </nav>

        <div style={{ display: 'none' }}>
          <small>
            <a href='https://www.freepik.com/vectors/background'>
              Background vector created by brgfx - www.freepik.com
            </a>
          </small>
          <br />
          <small>Photo by bongkarn thanyakij from Pexels</small>
          <small>Photo by Alex Conchillos from Pexels</small>
        </div>
      </div>
    </footer>
  );
}
