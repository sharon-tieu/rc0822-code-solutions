import React from 'react';
import ReactDOM from 'react-dom/client';

function ListPokemonItems(props) {
  return <li>{ props.value }</li>;
}

function PokemonList(props) {
  // console.log('props:', props);
  const pokedexList = props.pokedex;
  const listItems = pokedexList.map(pokemon =>
    <ListPokemonItems key={ pokemon.number.toString()} value={ pokemon.name } />
  );

  return (
    <ul>
      { listItems }
    </ul>
  );
}

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<PokemonList pokedex={pokedex} />);
