import { Stat } from "../model/Stat.js";
import { STAT_TYPE } from "../refs/stat-type.js";
import { limitArrBy, query, sortByTot } from "../utils/utils.js";

export class GetStats {
  constructor() {
    this._courses = [];
    this._programs = [];
  }

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

  popCourses = (statType, limit) => {
    const popular = 
      statType === STAT_TYPE.COURSE 
      ? sortByTot(this._courses)
      : sortByTot(this._programs)
    return limitArrBy(
      popular, limit);
  }
}