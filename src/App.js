import React from 'react';
import './App.css';

import Header from './componentes/Header/index.js';
import Footer from './componentes/Footer/index.js';
import Card from './componentes/Card/index.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;