import { LocForm } from "../units/LocForm.js";
import { NODE_ID } from "../refs/node-id.js";
import { node } from "../utils/utils.js";
import { Map } from "../units/Map.js";
import { getLocation } from "../../logic/feature/getLocation.js";
import { DEF_VALS } from "../../logic/data/def-vals.js";

/** 
* Skapar kartan
*/

/** 
* Hämta elementen i platsformuläret
*/
const subLocBtn = node(NODE_ID.SUB_LOC_BTN);
const locInput = node(NODE_ID.LOC_INPUT);
const error = node(NODE_ID.ERROR);

/** 
* Skapa kartan och uppdatera den med utgångskoordinaterna
*/
const map = new Map(NODE_ID.MAP);
map.update(DEF_VALS.LOCATION);

/** 
* Konfigurera formuläret och låt det uppdatera kartan
* når nya koordinater hämtas
*/
const locForm = new LocForm(
  subLocBtn, locInput, error);
locForm.wire(async (city, err) => {
  err.style.display = 'none';
  err.innerHTML = '';
  const loc = await getLocation(city);
  if(typeof(loc) === 'string') {
    err.style.display = 'block';
    err.textContent = loc;
    return;
  }
  map.update(loc);
});





