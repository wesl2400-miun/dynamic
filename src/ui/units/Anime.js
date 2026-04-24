
/** 
* Knyter animationer till HTML-element
*/
export class Anime {
  
  /** 
  * @constructor
  */
  constructor() {

    /** 
    * @type {function[]}
    */
    this._animes = [];
  }

  /** 
  * Tilldela ett HTML-element en CSS-klass med en animation
  * och spara denna aktion i funktionslistan this._animes för senare
  * @param {HTMLElement} node - Detta element ska animationen knytas till
  * @param {string} aniClass - CSS klass med animation
  */
  add = (node, aniClass) => {
    this._animes.push(() => {
      node.classList
        .remove(aniClass);
      node.offsetWidth;
      node.classList
        .add(aniClass);
    })
  }

  /** 
  * Tilldela knappen en händelse så att alla animationsklasser läggs till
  * lämpliga HTML-element
  * @param {HTMLElement} button
  */
  wire = (button) => {
    button.addEventListener(
      'click', () => {
      this._animes.forEach(
        anime => anime());
    });
  }
}