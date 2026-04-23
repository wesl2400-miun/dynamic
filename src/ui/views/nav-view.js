import { NODE_ID } from "../refs/node-id.js";
import { Nav } from "../units/Nav.js";
import { node, addSvg } from "../utils/utils.js";
import logoSvg from '../assets/mittlogo.svg?raw';

// Refererar existerande HTML-element
const logo = node(NODE_ID.LOGO_LINK);
const pTitle = node(NODE_ID.PAGE_TITLE);
const routes = node(NODE_ID.ROUTES);
const menuBtn = node(NODE_ID.MENU_BTN);

// Skapa logotypen dynamiskt (Behövs för att anpassa färgtema)
addSvg(logo, logoSvg);

// Skapa navigeringsfältet
const nav = new Nav(routes, pTitle);
nav.wire(menuBtn);

