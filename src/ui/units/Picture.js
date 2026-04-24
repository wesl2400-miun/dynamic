import { newNode } from "../utils/utils.js";

/** 
* Skapar dynamiskt ett picture-element
*/
export class Picture {

  /** 
  * @constructor
  * @param {HTMLElement} - Detta element knytts hela picture-elementet
  */
  constructor(parent) {
    this._root = newNode('picture', 
      null, null, parent);
  }

  /** 
  * Lägg till source-elementet
  * @param {string} src - URL:en där den valda bilden finns
  * @param {string} brPoint - Skärpunkten för responsivitetets skull
  */
  addSource = (src, brPoint) => {
    const source = newNode('source', 
      null, null, this._root);
    source.srcset = src;
    if(brPoint) source.media = 
      `(min-width: ${brPoint}px)`;
  }

  /** 
  * Skapar en fallback-bild
  * @param {string} src - URL:en där den valda bilden finns
  * @param {string} alt - Alternativ text för den valda bilden
  */
  addFallback = (src, alt) => {
    const img = newNode('img', 
      null, null, this._root);
    img.src = src;
    img.alt = alt;
    img.width = '250';
    img.height = '100';
    img.fetchPriority = 'high';
  }

  /** 
  * @returns {HTMLElement} - Returnerar picture-elementet
  */
  root = () => this._root;
}