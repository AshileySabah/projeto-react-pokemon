import React from 'react';
import './style.css';

function Card(props) {
  return (
    <div className="caixa-card">
        <div className="caixa-imagem">
          {props.imagem}
        </div>
        <div className="caixa-especificacoes">
          <p>Nome: {props.nome}</p>
          <p>Tipo: {props.tipo}</p>
          <p>Peso: {props.peso}</p>
        </div>
    </div>
  );
}

export default Card;