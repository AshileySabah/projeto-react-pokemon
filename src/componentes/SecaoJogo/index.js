import React from 'react';
import './style.css';

import Card from '../Card/index.js';

function SecaoJogo() {
  function botaoJogar(){
    const areaCards = document.querySelector('[data-area-cards]');
    const btnJogar = document.querySelector('[data-button-jogar]');
    btnJogar.textContent = 'Vai';
    
    if(areaCards.classList.contains('esconder')){
      areaCards.classList.remove('esconder');
    }
  }

  const requisicao = (url) => {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();
    const resultado = JSON.parse(xhttp.responseText);

    return resultado;
  }

  const numeroAleatorio = (min, max) => {
    const numero = Math.floor(Math.random() * (max - min) + min);
    return numero;
  }

  const propriedadesCard = () => {
    const numeroPokemon = numeroAleatorio(1, 10);

    const imagem = <img src={`https://cdn.traction.one/pokedex/pokemon/${numeroPokemon}.png`} alt="Imagem de Pokemon" className="img-caixa-card"/>
    
    const propriedades = [];
    propriedades['imagem'] = imagem;

    const url = `https://pokeapi.co/api/v2/pokemon/${numeroPokemon}`;
    const dadosRequisicao = requisicao(url);

    propriedades['nome'] = dadosRequisicao.forms[0].name;
    propriedades['tipo'] = dadosRequisicao.types[0].type.name;
    propriedades['peso'] = dadosRequisicao.weight;

    return propriedades;
  }

  const card1 = propriedadesCard();
  const card2 = propriedadesCard();
  const card3 = propriedadesCard();

  return (
    <section className="secao-jogar">
      <h2 className="titulo-secundario">Boa sorte!</h2>
      <div className="area-cards esconder" data-area-cards>
        <Card
          imagem={card1.imagem}
          nome={card1.nome}
          tipo={card1.tipo}
          peso={card1.peso}
        />
        <Card
          imagem={card2.imagem}
          nome={card2.nome}
          tipo={card2.tipo}
          peso={card2.peso}
        />
        <Card
          imagem={card3.imagem}
          nome={card3.nome}
          tipo={card3.tipo}
          peso={card3.peso}
        />
      </div>
      <button className="botao-vai" onClick={botaoJogar} data-button-jogar>
        Começar
      </button>
    </section>
  );
}

export default SecaoJogo;