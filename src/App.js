import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="App">
        <div class="App-header">
          <nav class="navbar">
            <div class="container">
              <a href="/">Thiago Braga</a>
            </div>
          </nav>
        </div>

        <div class="App-body">
          <div class="container">
            <p class="text-justify">
              <b>Oi, sou Thiago Braga.</b> Sou um desenvolvedor full stack focado em PHP, JavaScript e CSS, e também um entusiasta da cultura DevOps.
              Também sou apaixonado por música e guitarrista nas bandas <a href="https://sociopata.org" target="_blank">Sociopata</a>, <a href="https://revelhc.com" target="_blank">Revel</a> e <a href="https://escapefromtheworld.com" target="_blank">Escape from the World</a>.
            </p>

            <p>O que tenho feito ultimamente (ou tentado):</p>

            <ul class="small">
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

        <div class="App-footer">
          <div class="container">
            Não utilizo redes sociais. Sou anti-social. <b>Não me procure.</b>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
