import { Stats } from "../../logic/feature/Stats.js";
import { URL } from "../../logic/refs/url.js";
import { STAT_TYPE } from "../../logic/refs/stat-type.js";
import { format, node } from "../utils/utils.js";
import { Chart } from "chart.js/auto";
import { NODE_ID } from "../refs/node-id.js";

const stats = new Stats();
  await stats.init(URL.COURSES);
  const courses = stats
    .popCourses(STAT_TYPE.COURSE, 6);
  const programs = stats
    .popCourses(STAT_TYPE.PROGRAM, 6);

const datasets = (stats) => [{
  barPercentage: 1.0,
  maxBarThickness: 20,
  label: 'Totalt antal sökande',
  data: stats.map(stat => {
    return { 
      x: format(stat.name), 
      y: stat.total }
  })
}];

const opts = (stats) => {
  return {
    indexAxis: 'x',
    scales: {
      x: { ticks: {
        callback: (value, index, ticks) => 
          stats[index].name.split(' ')}
      }
    }
  }
};

const courNode = node(NODE_ID.COURSES);

new Chart(
 courNode, {
    type: 'bar',
    options: opts(courses),
    data: { datasets: datasets(courses) }
  }
);