
/** 
* Statistik från Antagning.se
*/
export class Stat {
  
  /** 
  * @constructor
  * @param {string} name - Namn på kurs/program
  * @param {number} total - Totalt antal sökande
  */
  constructor(name, total) {
    this.name = name;
    this.total = total;
  }
}