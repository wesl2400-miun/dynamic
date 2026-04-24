
/** 
* Vyn för kartformuläret
*/
export class LocForm {

  /** 
  * @constructor
  * @param {HTMLInputElement} subBtnt - formulärknappen
  * @param {HTMLInputElement} input - inmatningsfältet för formuläret
  * @param {HTMLElement} err - Visar eventuella fel i formuläret
  */
  constructor(subBtnt, 
    input, err) {
    this._subBtn = subBtnt;
    this._input = input;
    this._err = err;
  }

  /** 
  * Tilldelar formulärknappen en händelse så att
  * platsen hämtas och används senare för att generera en karta
  * @param {function} - Hämtar plats baserad på vald ort 
  * och uppdaterar det HTML-element som visar eventuella fel
  */
  wire = (onClick) => {
    this._subBtn.addEventListener(
      'click', (event) => {
      event.preventDefault();
      const { value } = this._input;
      console.log(value)
      onClick(value, this._err);
    })
  }
}