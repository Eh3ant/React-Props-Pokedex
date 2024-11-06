import React from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'
// import pokemonCharacters from './pokemonCharecters'


const Pokedex = ({ pokemonCharacters }) => {
    return (
        <div className="Pokedex">
            {pokemonCharacters.map(p => (
                <Pokecard key={p.id}
                    id={p.id}
                    name={p.name}
                    type={p.type}
                    base_experience={p.base_experience}
                />
            ))}
        </div>
    );
};

export default Pokedex