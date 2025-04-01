import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../data/pokemons.json');
 
export const getPokemons = () => {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};
