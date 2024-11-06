import React from 'react'

import './Pokecard.css'


const Pokecard = ({ id, name, type, base_experience }) => {
    const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <div className='Pokecard'>
            <h2 className='Pokecard-name'>{name}</h2>
            <img src={imgSrc} alt={name} className='Pokecard-image' />
            <p>Type:{type}</p>
            <p>EXP:{base_experience}</p>
        </div>
    )
}

export default Pokecard