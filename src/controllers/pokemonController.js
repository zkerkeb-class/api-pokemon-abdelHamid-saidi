import { getPokemons } from '../models/pokemonModel.js';


export const getAllPokemons = (req, res) => {
  res.status(200).send({
    types: [
      "fire",
      "water",
      "grass",
      "electric",
      "ice",
      "fighting",
      "poison",
      "ground",
      "flying",
      "psychic",
      "bug",
      "rock",
      "ghost",
      "dragon",
      "dark",
      "steel",
      "fairy",
    ],
    pokemons: getPokemons(),
  });
};

export const welcomeMessage = (req, res) => {
  res.send("Bienvenue sur l'API Pokémon");
};
