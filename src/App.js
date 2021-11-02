import React from 'react';
import './App.css';

import Header from './componentes/Header/index.js';
import Footer from './componentes/Footer/index.js';
import SecaoJogo from './componentes/SecaoJogo/index.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <SecaoJogo/>
      <Footer/>
    </div>
  );
}

export default App;