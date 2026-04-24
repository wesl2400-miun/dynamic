import { LocForm } from "../units/LocForm.js";
import { NODE_ID } from "../refs/node-id.js";
import { node } from "../utils/utils.js";
import { Map } from "../units/Map.js";
import { getLocation } from "../../logic/feature/getLocation.js";
import { DEF_VALS } from "../../logic/data/def_vals.js";

const subLocBtn = node(NODE_ID.SUB_LOC_BTN);
const locInput = node(NODE_ID.LOC_INPUT);
const error = node(NODE_ID.ERROR);

const map = new Map(NODE_ID.MAP);
map.update(DEF_VALS.LOCATION);

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





