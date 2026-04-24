import { Stat } from "../model/Stat.js";
import { STAT_TYPE } from "../refs/stat-type.js";
import { limitArrBy, query, sortByTot } from "../utils/utils.js";

/** 
* Hämtar statistik från Mittuniversitetets kurs- och program-URL:en.
*/

export class GetStats {

  /**
  * @constructor
  */
  constructor() {

    /** 
    * Kurslista
    * @private
    * @type {Stat[]} 
    */
    this._courses = [];

    /** Programlista
    * @private
    * @type {Stat[]} 
    */
    this._programs = [];
  }

  /**
  * @async
  * @function 
  * @param {string} url - Förfrågan skickas till denna URL
  */
  init = async (url) => {
    const result = await query(url);
    result.filter(data => {
      const { type, name, 
        applicantsTotal } = data;
      const stat = new Stat(
        name, Number(
          applicantsTotal));
      if(type === 'Kurs')
        this._courses.push(stat);
      else this._programs.push(stat);
    });
  }

  /** 
  * Hämtar mest sökta kurser eller program
  * @function
  * @param {string} statType - typ av statistik som efterfrågas
  * @param {number} limit - antalet mest sökta kurser/program som ska hämtas
  * @example limit=10 betyder att bara först 10 mest sökta kurser/program ska hämtas
  */
  popular = (statType, limit) => {
    const popular = 
      statType === STAT_TYPE.COURSE 
      ? sortByTot(this._courses)
      : sortByTot(this._programs)
    return limitArrBy(
      popular, limit);
  }
}