import React from 'react'
import './App.css';
import Pokedex from './Pokedex'
import pokemonCharacters from './pokemonCharecters';

function App() {
  return (
    <div className="App">
      <h1 className='App-header'>Pokedex</h1>
      <Pokedex pokemonCharacters={pokemonCharacters} />

    </div>
  );
}

export default App;
