import { GetStats } from "../../logic/feature/GetStats.js";
import { URL } from "../../logic/refs/url.js";
import { STAT_TYPE } from "../../logic/refs/stat-type.js";
import { format, node } from "../utils/utils.js";
import { Chart } from "chart.js/auto";
import { NODE_ID } from "../refs/node-id.js";

/** 
* Skapar diagrammen dynamiskt
*/

/** 
* Hämta element där diagram ska placeras
*/
const courNode = node(NODE_ID.COURSES);
const progNode = node(NODE_ID.PROGRAMS);

/** 
* Ändra utgångsvädet för teckensnittsfärg i diagrammen
*/
Chart.defaults.color = '#363636';

/** 
* Hämta statistik
*/
const stats = new GetStats();
  await stats.init(URL.COURSES);
  const courses = stats
    .popular(STAT_TYPE.COURSE, 6);
  const programs = stats
    .popular(STAT_TYPE.PROGRAM, 5);

/** 
* Data för kursdiagram
*/
const courData = [{
  barPercentage: 1.0,
  maxBarThickness: 20,
  label: 'Totalt antal sökande',
  data: courses.map(stat => {
    return { 
      x: format(stat.name), 
      y: stat.total }
  })
}];

/** 
* Inställningar för kursdiagram
*/
const courOpts = {
  indexAxis: 'x',
  scales: {
    x: { ticks: {
      callback: (value, index, ticks) => 
      courses[index].name.split(' ')}
    }
  }
};

/** 
* Skapa stapeldiagrammet för kurser
*/
new Chart(
 courNode, {
    type: 'bar',
    options: courOpts,
    data: { datasets: courData}
  }
);

/** 
* Data för programdiagrammet
*/
const progData = {
  labels: programs.map(
    course => course.name),
  datasets: [{
    label: 'Totalt antal sökande',
    data: programs.map(
      course => course.total),
  }]
}

/** 
* Skapar cirkeldiagrammet för program
*/
new Chart(
 progNode, {
    type: 'pie',
    data: progData
  }
);