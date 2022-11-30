import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const root = ReactDOM.createRoot(document.querySelector('#root'));

// topics is an array of objects
const topics = [
  {
    id: 1,
    title: 'Bulbasaur',
    content: 'Bulbasaur is a small, quadrupedal amphibian Pokémon that has blue-green skin with darker patches.'
  },
  {
    id: 2,
    title: 'Charmander',
    content: 'Charmander is a bipedal, reptilian Pokémon with a primarily orange body and blue eyes. Its underside from the chest down and the soles of its feet are cream-colored.'
  },
  {
    id: 3,
    title: 'Squirtle',
    content: 'Squirtle is a small reptilian Pokémon that resembles a light-blue turtle. While it typically walks on its two short legs, it has been shown to run on all fours in Super Smash Bros. Brawl. It has large, purplish or reddish eyes and a slightly hooked upper lip.'
  }
];

root.render(<Accordion topics={topics} />);
