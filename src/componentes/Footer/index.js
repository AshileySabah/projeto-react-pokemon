import React from 'react';
import './style.css';

function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer>
        <p>ThePokeWorld &copy; {anoAtual}</p>
        <p>Desenvolvido por Ashiley</p>
    </footer>
  );
}

export default Footer;