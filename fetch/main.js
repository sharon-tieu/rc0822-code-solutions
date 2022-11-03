const fetchJSON = fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
console.log('fetch:', fetchJSON);

const fetchPokemon = fetch('https://pokeapi.co/api/v2/pokemon/eevee')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });

console.log('fetchPokemon:', fetchPokemon);
