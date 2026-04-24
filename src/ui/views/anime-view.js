import { ANIME } from "../refs/anime.js";
import { Anime } from "../units/Anime";
import { NODE_ID } from "../refs/node-id.js";
import { node, picture, addSvg } from "../utils/utils.js";
import fballSvg from '../assets/football.svg?raw';
import coffee1 from '../assets/coffee1.jpg?w=500;400;250&format=webp;';

/** 
* Skapar animationerna dynamiskt
*/

/** 
* Hämta existerande HTML-element
*/
const gallNode = node(NODE_ID.GALLERY);
const dem1btn = node(NODE_ID.DEMO_BTN1);
const provRef = node(NODE_ID.PROV_REF);
const provText = node(NODE_ID.PROV_TEXT);

const dem2btn = node(NODE_ID.DEMO_BTN2);
const dem3btn = node(NODE_ID.DEMO_BTN3);
const fballCont = node(NODE_ID.FOOTBALL);

/** 
* Lägg till fotboll-bilden
*/
addSvg(fballCont, fballSvg);

/** 
* Skapa demo-animationen nr 1
*/
const demo1 = new Anime();
demo1.add(provRef, ANIME.TEXT1);
demo1.add(provText, ANIME.TEXT2);
demo1.wire(dem1btn);

/** 
* Skapa demo-aniamtionen nr 2
*/
const pic = picture(coffee1, 'Kakor med chocklad och en kaffekopp', gallNode);
const demo2 = new Anime();
demo2.add(pic.root(), ANIME.IMAGE);
demo2.wire(dem2btn)

/** 
* Skapa demo-animationen nr 3
*/
const demo3 = new Anime();
demo3.add(fballCont, ANIME.FOOTBALL);
demo3.wire(dem3btn);


