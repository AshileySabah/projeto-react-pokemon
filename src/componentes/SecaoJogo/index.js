import React from 'react';
import './style.css';

import Card from '../Card/index.js';
import Botao from '../Botao/index.js';

function SecaoJogo() {
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
    const numeroPokemon = numeroAleatorio(1, 4);

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

  var card1 = propriedadesCard();
  var card2 = propriedadesCard();
  var card3 = propriedadesCard();

  console.log(card1.nome);
  console.log(card2.nome);
  console.log(card3.nome);

  var statusTitulo = '';

  if(card1.nome === card2.nome && card1.nome === card3.nome){
    statusTitulo = 'Todos iguais!';
  }

  return (
    <section className="secao-jogar">
      <h2 className="titulo-secundario">{statusTitulo}</h2>
      <div className="area-cards" data-area-cards>
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
      <Botao/>
    </section>
  );
}

export default SecaoJogo;