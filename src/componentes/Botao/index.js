import React from 'react';
import './style.css';

function Botao() {
  function botaoJogar(){
    const areaCards = document.querySelector('[data-area-cards]');
    const btnJogar = document.querySelector('[data-button-jogar]');
    btnJogar.textContent = 'Vai';
    
    if(areaCards.classList.contains('esconder')){
      areaCards.classList.remove('esconder');
    }
  }

  return (
    <button className="botao-vai" onClick={botaoJogar} data-button-jogar>
      Começar
    </button>
  );
}

export default Botao;