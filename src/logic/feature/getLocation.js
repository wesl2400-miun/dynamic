import { API } from "../refs/api.js";
import { query } from "../utils/utils.js";

/**
 * Hämtar koordinaterna för en vald ort från Nominati-API:t
 * @async
 * @function getLocation
 * @param {string} city - vald plats
 * @returns {Promise<{lat: string, lon: string} | string>}
 */

export const getLocation = 
  async (city) => {
  if(city.length === 0)
    return '* Textfältet får inte vara tomt';
  const result = await query(
    API.location(city));
  if(!result[0]) 
    return '* Kunde inte hitta platsen.' + 
      'Kolla om stavningen är korrekt.';
  const  { lat, 
    lon } = result[0];
  return { lat, lon };
}