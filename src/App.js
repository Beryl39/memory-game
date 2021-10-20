import React from 'react';
import CardList from './components/CardList.js';
import './App.css'
import { CardProvider } from './components/CardContext.js';

function App() {
  return (
    <CardProvider>
      <div className="App">
        <h1>Memory</h1>
        <CardList />
      </div>
    </CardProvider>
  );
}

export default App;
