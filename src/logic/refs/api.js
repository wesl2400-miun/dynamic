
/** 
* URL:er till olika API
* @type {Object}
*/
export const API = Object.freeze({

  /** 
  * Hämtar platsdata
  * @param {string} city - Vald plats
  * @returns {string} - returnerar den dynamiska URL:en
  */
  location: (city) => `https://nominatim.openstreetmap.org/search?q=${city}&format=json&accept-language=en`
});