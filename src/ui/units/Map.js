import { MAP } from "../../logic/refs/map.js";

/** 
* Skapar Leaflet-kartan
*/
export class Map {

  /** 
  * @constructor
  * @param {string} - sträng-ID:et för kartelementet
  */
  constructor(nodeId) {
    this._map = L.map(nodeId);
  }
  
  /** 
  * Uppdatera Leaflet-kartan baserat på platskoordinater
  * @param {Object} loc - Innehåller information om koordinater för en vald plats
  */
  update = (loc) => {
    const { lat, lon } = loc;
    const zoom = 10;
    this._map.setView(
      [lat, lon], zoom);
    this._initTile(this._map);
    this._initMarker(this._map, loc);
  }

  /** 
  * Initiera OpenStreetMap-kartlagret
  * @private
  * @param {Object} map - Leaflet-kartobjekt
  */
  _initTile = (map) => {
    L.tileLayer(MAP.URL, {
      maxZoom: 20,
      attribution: MAP.ATTR,
    }).addTo(map);
  }

  /** 
  * Initiera kartmarkören
  * @private
  * @param {Object} map - Leaflet-kartobjekt
  * @param {Object} loc - Koordinater för vald plats
  */
  _initMarker = (map, loc) => {
    const { lat, lon } = loc;
    L.marker([lat, lon])
      .addTo(map)
      .openPopup();
  }
}