import { NODE_ID } from "../refs/node-id.js";
import { Nav } from "../units/Nav.js";
import { node, addSvg } from "../utils/utils.js";
import logoSvg from '../assets/mittlogo.svg?raw';
import { Stats } from "../../logic/feature/Stats.js";
import { URL } from "../../logic/refs/url.js";
import { STAT_TYPE } from "../../logic/refs/stat-type.js";

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

const stats = new Stats();
await stats.init(URL.COURSES);
console.log(stats.popCourses(STAT_TYPE.COURSE, 6));
console.log(stats.popCourses(STAT_TYPE.PROGRAM, 6));


