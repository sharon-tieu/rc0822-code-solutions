import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const images = [
  {
    id: 1,
    title: 'Bulbasaur',
    url: '../images/001.png'
  },
  {
    id: 2,
    title: 'Charmander',
    url: '../images/004.png'
  },
  {
    id: 3,
    title: 'Squirtle',
    url: '../images/007.png'
  },
  {
    id: 4,
    title: 'Pikachu',
    url: '../images/025.png'
  },
  {
    id: 5,
    title: 'Jigglypuff',
    url: '../images/039.png'
  },
  {
    id: 6,
    title: 'Cubone',
    url: '../images/104.png'
  }
];

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Carousel images={ images } />);

// props is images. to access this is this.props.images
// Carousel is a component
