import openMenu from '../assets/open-menu.svg?raw';
import closeMenu from '../assets/close-menu.svg?raw';

/** 
* Skapar navigeringsfältet
*/
export class Nav {

  /** 
  * @constructor
  * @param {HTMLElement} routes - Rutterna för navigeringsfältet
  */
  constructor(routes) {
    this._routes = routes;
  }

  /** 
  * Tilldela menyknappen en händelse så att navigeringsfältet stängs eller öppnas
  * @param {HTMLElement} menuBtn - Menyknappen
  */
  wire = (menuBtn) => {
    this._closed = true;
    this._changeSvg(menuBtn);
    menuBtn.addEventListener('click', () => {
      this._closed = !this._closed;
      this._changeSvg(menuBtn);
      this._routes.style
      .display = this._closed
      ? 'none' : 'flex';
    });
  }

  /** 
  * Ändra svg-bilden för menyknappen dynamiskt så att
  * färgen respekterar natt- respektive dagsläge
  * @private
  * @param {Object} menuBtn - Menyknappen
  */
  _changeSvg = (menuBtn) => {
    const svg = this._closed
      ? openMenu : closeMenu;
    const aria = this._closed
      ? 'Öppna menyn' : 'Stäng menyn';
    menuBtn.innerHTML = svg;
    menuBtn.ariaLabel = aria;
  }
}