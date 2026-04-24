import { MAP } from "../../logic/refs/map";
import { node } from "../utils/utils";

export class Map {
  constructor(nodeId) {
    this._map = L.map(nodeId);
  }

  update = (loc) => {
    const { lat, lon } = loc;
    const zoom = 10;
    this._map.setView(
      [lat, lon], zoom);
    this._initTile(this._map);
    this._initMarker(this._map, loc);
  }

  _initTile = (map) => {
    L.tileLayer(MAP.URL, {
      maxZoom: 20,
      attribution: MAP.ATTR,
    }).addTo(map);
  }

  _initMarker = (map, loc) => {
    const { lat, lon } = loc;
    L.marker([lat, lon])
      .addTo(map)
      .openPopup();
  }
}