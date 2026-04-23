import { newNode } from "../utils/utils.js";

// Picture-elementet
export class Picture {

  // parent är elementet som denna vy ska knytas till
  constructor(parent) {
    this._root = newNode('picture', 
      null, null, parent);
  }

  // Lägg till ett source-element för en bild med en specifik skärpunkt
  addSource = (src, brPoint) => {
    const source = newNode('source', 
      null, null, this._root);
    source.srcset = src;
    if(brPoint) source.media = 
      `(min-width: ${brPoint}px)`;
  }

  // Lägg till ett fallback img-element för en bild med en alternativ text
  addFallback = (src, alt) => {
    const img = newNode('img', 
      null, null, this._root);
    img.src = src;
    img.alt = alt;
    img.width = '250';
    img.height = '100';
    img.fetchPriority = 'high';
  }

  // Returnerar Picture-elementet
  root = () => this._root;
}