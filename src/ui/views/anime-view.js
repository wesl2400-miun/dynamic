import { ANIME } from "../refs/anime.js";
import { Anime } from "../units/Anime";
import { NODE_ID } from "../refs/node-id.js";
import { node, picture, addSvg } from "../utils/utils.js";
import fballSvg from '../assets/football.svg?raw';
import coffee1 from '../assets/coffee1.jpg?w=500;400;250&format=webp;';
/**
 * Vite-Imagetools skapar listor av responsiva bilder 
 * och dessa hämtas via nyckelotdet 'import'
 */


// Hämta gallery-elementet
const gallNode = node(NODE_ID.GALLERY);

// Hämta alla element för demo1-animationen
const dem1btn = node(NODE_ID.DEMO_BTN1);
const provRef = node(NODE_ID.PROV_REF);
const provText = node(NODE_ID.PROV_TEXT);

// Demo2 knapp
const dem2btn = node(NODE_ID.DEMO_BTN2);

// Demo3 relaterade HTML-element
const dem3btn = node(NODE_ID.DEMO_BTN3);
const fballCont = node(NODE_ID.FOOTBALL);
addSvg(fballCont, fballSvg);

// Skapa demo1 animationen
const demo1 = new Anime();
demo1.add(provRef, ANIME.TEXT1);
demo1.add(provText, ANIME.TEXT2);
demo1.wire(dem1btn);

// Skapa ett picture-element och knyt den till gallery-elementet
const pic = picture(coffee1, 'Kakor med chocklad och en kaffekopp', gallNode);

// Skapa demo2 animationen
const demo2 = new Anime();
demo2.add(pic.root(), ANIME.IMAGE);
demo2.wire(dem2btn)

// Skapa demo3 animationen
const demo3 = new Anime();
demo3.add(fballCont, ANIME.FOOTBALL);
demo3.wire(dem3btn);


