import React from 'react';
import './style.css';

function Botao() {
  function botaoJogar(){
    document.location.reload(true);
  }

  return (
    <button className="botao-vai" onClick={botaoJogar} data-button-jogar>
      VAI
    </button>
  );
}

export default Botao;