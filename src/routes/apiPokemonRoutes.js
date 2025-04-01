import express from 'express';
import { getAllPokemons, welcomeMessage } from '../controllers/pokemonController.js';

const router = express.Router();

router.get('/pokemons', getAllPokemons); 

export default router;
