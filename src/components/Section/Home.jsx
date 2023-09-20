import '../../styles/pages/home.sass';
import React from 'react';
import url from '../../services/UrlService';
import Link from '../Link/Link';
import Logo from '../Logo/Logo';

const Revel = () => <Link href={url.revel}>Revel</Link>;
const Sociopata = () => <Link href={url.sociopata}>Sociopata</Link>;
const GrupoTesseract = () => <Link href={url.tesseract}>Grupo Tesseract</Link>;

export default function Home(props) {
  const { style } = props;
  return (
    <section className='home' style={style}>
      <div className='container'>
        <Logo size='lg' />

        <p>
          Web | Mobile <span>Developer</span> · DevOps <span>Evangelist</span>
        </p>

        <p>
          CFO | Developer <em>@</em> <GrupoTesseract />
        </p>

        <p>
          Guitarist <em>@</em> <Sociopata /> | <Revel />
        </p>
      </div>
    </section>
  );
}
