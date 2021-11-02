import React from 'react';
import './style.css';

function Card() {
  return (
    <div className="caixa-card">
        <div className="caixa-imagem">
          <img src="https://cdn.traction.one/pokedex/pokemon/1.png" alt="Card de Pokemon" class="img-caixa-card"/>
        </div>
        <div className="caixa-especificacoes">
          <p>Nome: </p>
          <p>Tipo: </p>
          <p>Peso: </p>
        </div>
    </div>
  );
}

export default Card;