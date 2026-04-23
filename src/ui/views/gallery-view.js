import { NODE_ID } from "../refs/node-id.js";
import { node, picture } from "../utils/utils.js";
import coffee1 from '../assets/coffee1.jpg?w=500;400;250&format=webp;';
import coffee2 from '../assets/coffee2.jpg?w=500;400;250&format=webp;';

/**
 * Vite-Imagetools skapar listor av responsiva bilder 
 * och dessa hämtas via nyckelotdet 'import'
 */

// Hämta gallery-elementet
const gallNode = node(NODE_ID.GALLERY);

// Skapa 2 picture-element och knyt dessa till gallery-elementet
picture(coffee1, 'Kakor med chocklad och en kaffekopp', gallNode);
picture(coffee2, 'Sockerkaka med russin och en kaffekopp', gallNode);