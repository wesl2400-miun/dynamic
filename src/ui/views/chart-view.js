import { GetStats } from "../../logic/feature/GetStats.js";
import { URL } from "../../logic/refs/url.js";
import { STAT_TYPE } from "../../logic/refs/stat-type.js";
import { format, node } from "../utils/utils.js";
import { Chart } from "chart.js/auto";
import { NODE_ID } from "../refs/node-id.js";

/** 
* Skapar diagrammen dynamiskt
*/

const courNode = node(NODE_ID.COURSES);
const progNode = node(NODE_ID.PROGRAMS);

Chart.defaults.color = '#363636';

const stats = new GetStats();
  await stats.init(URL.COURSES);
  const courses = stats
    .popular(STAT_TYPE.COURSE, 6);
  const programs = stats
    .popular(STAT_TYPE.PROGRAM, 5);

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

const courOpts = {
  indexAxis: 'x',
  scales: {
    x: { ticks: {
      callback: (value, index, ticks) => 
      courses[index].name.split(' ')}
    }
  }
};

new Chart(
 courNode, {
    type: 'bar',
    options: courOpts,
    data: { datasets: courData}
  }
);

const progData = {
  labels: programs.map(
    course => course.name),
  datasets: [{
    label: 'Totalt antal sökande',
    data: programs.map(
      course => course.total),
  }]
}

new Chart(
 progNode, {
    type: 'pie',
    data: progData
  }
);