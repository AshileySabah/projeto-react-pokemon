import React from 'react';
import './style.css';

import Card from '../Card/index.js';
import Botao from '../Botao/index.js';

function SecaoJogo() {
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
    <section className="secao-jogar">
      <div className="area-cards">
        <Card
          imagem={montarImagemCard()}
          nome="Bulba"
          tipo="agua"
          peso="200"
        />
        <Card
          imagem={montarImagemCard()}
          nome="Bulba"
          tipo="agua"
          peso="200"
        />
        <Card
          imagem={montarImagemCard()}
          nome="Bulba"
          tipo="agua"
          peso="200"
        />
      </div>
      <Botao/>
    </section>
  );
}

export default SecaoJogo;