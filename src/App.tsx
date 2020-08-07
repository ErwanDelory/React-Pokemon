import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';

//const App: React.FC
const App: FunctionComponent = () => {
    //const name: String = 'React';
    //const [name, setName] = useState<String>('React');

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    useEffect(() => {
        setPokemons(POKEMONS);
    }, []);

    return (
        <div>
            <h1>Pokédex</h1>
            <p>Il y a { pokemons.length } pokémons dans le Pokédex</p>
        </div>
    )
}

export default App; 