import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <nav className="navbar">
            <div className="container">
              <a href="/">Thiago Braga</a>
            </div>
          </nav>
        </div>

        <div className="App-body">
          <div className="container">
            <p className="text-justify">
              <b>Oi, sou Thiago Braga.</b> Sou um desenvolvedor full stack
              focado em PHP, JavaScript e CSS, e também um entusiasta da cultura DevOps.
              Também sou apaixonado por música e guitarrista
              nas bandas <a href="https://open.spotify.com/artist/4jThTw7lss5OnXBzwXYFSD" target="_blank" rel="noopener noreferrer">Sociopata</a>, <a href="https://open.spotify.com/artist/6mDkruhCYigOgLPIH9JJ0K" target="_blank" rel="noopener noreferrer">Revel</a> e <a href="https://escapefromtheworld.bandcamp.com/" target="_blank" rel="noopener noreferrer">Escape from the World</a>.
            </p>

            <p>O que tenho feito ultimamente (ou tentado):</p>

            <ul className="small">
              <li>Finalizar o EP <b>Estrada Perdida</b> da banda Revel</li>
              <li>Organizar uma tour de 10 anos da banda Sociopata</li>
              <li>Ah... também tenho alguns vídeos da Sociopata para terminar no Adobe Premiere</li>
              <li>E além dessas coisas, surgiu a vontade de criar uma <i>one man band</i>, chamada <b>One Man Braga</b></li>
              <li>Tentado correr na minha casa para deixar de ser sedentário</li>
              <li>Estudar inglês diariamente com o Duolingo</li>
              <li>Tentado focar na minha saúde</li>
              <li>Finalizar este site...</li>
              <li>Aprender React</li>
            </ul>
          </div>
        </div>

        <div className="App-footer">
          <div className="container">
            Thiago Braga
          </div>
        </div>
      </div>
    );
  }
}

export default App;
