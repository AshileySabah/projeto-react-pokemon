import React from 'react';
import './App.css';

import Header from './componentes/Header/index.js';
import Footer from './componentes/Footer/index.js';
import Card from './componentes/Card/index.js';
import Botao from './componentes/Botao/index.js';

function App() {

  const numeroAleatorio = (min, max) => {
    const numero = Math.floor(Math.random() * (max - min) + min);
    return numero;
  }

  const montarImagemCard = () => {
    const numeroPokemon = numeroAleatorio(1, 20);
    const imagem = <img src={`https://cdn.traction.one/pokedex/pokemon/${numeroPokemon}.png`} alt="Imagem de Pokemon" className="img-caixa-card"/>
    return imagem;
  }

  return (
    <div className="App">
      <Header/>
      <Card
        imagem={montarImagemCard()}
        nome="Bulba"
        tipo="agua"
        peso="200"
      />
      <Botao/>
      <Footer/>
    </div>
  );
}

export default App;