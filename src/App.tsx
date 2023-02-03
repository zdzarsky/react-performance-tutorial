import React, { useEffect } from 'react'
import './App.css';
import { Cards } from './features/cards/Cards'


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Cards />
      </header>
    </div>
  );
}

export default App;
