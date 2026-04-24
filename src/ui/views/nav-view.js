import { NODE_ID } from "../refs/node-id.js";
import { Nav } from "../units/Nav.js";
import { node, addSvg } from "../utils/utils.js";
import logoSvg from '../assets/mittlogo.svg?raw';

/** 
* Skapar logotypen och navigeringsfältet dynamiskt 
* (Logotypen måste skapas dynamiskt så att det kan ändra 
* färgerna dynamiskt vid natt- respektive dagsläge)
*/
const logo = node(NODE_ID.LOGO_LINK);
const routes = node(NODE_ID.ROUTES);
const menuBtn = node(NODE_ID.MENU_BTN);

addSvg(logo, logoSvg);

const nav = new Nav(routes);
nav.wire(menuBtn);

