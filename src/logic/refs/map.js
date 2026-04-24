/** 
* Strängar relaterade till Leaflet-kartor
* @type {Object}
*/
export const MAP = Object.freeze({

  /** 
  * URL:en till Open Street Map
  * @property {string} URL
  */
  URL: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',

  /** 
  * Används för att skapa Leaflet-karta
  * @property {string} ATTR
  */
  ATTR: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});