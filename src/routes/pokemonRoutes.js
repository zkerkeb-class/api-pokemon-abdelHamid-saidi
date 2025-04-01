import express from 'express';
import { getAllPokemons, welcomeMessage } from '../controllers/pokemonController.js';

const router = express.Router();

router.get('/', welcomeMessage);

export default router;
