import React from 'react';

import '../../styles/pages/projects.sass';

import jojopaper from '../../images/screenshot-jojopaper.jpg';
import jojopaper1 from '../../images/screenshot-jojopaper-cut-1.jpg';
import jojopaper2 from '../../images/screenshot-jojopaper-cut-2.jpg';
import jojopaper3 from '../../images/screenshot-jojopaper-cut-3.jpg';

export default function Projects() {
  return (
    <section className='projects'>
      <div className='container'>
        <h1>Projects</h1>

        <div className='projects-thumbnail'>
          <img src={jojopaper3} />
        </div>
      </div>
    </section>
  );
}
