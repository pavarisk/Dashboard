import * as d3 from 'd3'
import { getAirtable } from '../../api/airTableApi'
// import dataAir from '../BarChart'
function countArr (data) {
  const keys = []
  const arr = []
  const obj = {}
  data.map(t => arr.push(t.Themes))
  arr.map((item) => {
    if (!keys.includes(item)) {
      keys.push(item)
    } else if (keys.includes(item)) {
		 return keys
    }
  })
  for (let i = 0; i < keys.length; i++) {
    const filters = arr.filter(t => (t === keys[i])).length
    obj[keys[i]] = filters
  }
  return Object.values(obj)
}

export function drawChart (data) {
// set the dimensions and margins of the graph
  const margin = { top: 30, right: 30, bottom: 70, left: 60 }
  const width = 460 - margin.left - margin.right
  const height = 400 - margin.top - margin.bottom
  // append the svg object to the body of the page
  const svg = d3.select('#barchart')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`)
  // Parse the Data
  getAirtable(data).then(function (values) {
    // X axis
    console.log(data)
    const x = d3.scaleBand()
      .range([0, width])
      .domain(data.map(d => d.Themes))
      .padding(0.2)
    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end')

    // Add Y axis
    const y = d3.scaleLinear()
      .domain([0, 20])
      .range([height, 0])
    svg.append('g')
      .call(d3.axisLeft(y))
    const arrBeta = countArr(values)
    // Bars
    svg.selectAll('barchart')
      .data(arrBeta)
      .join('rect')
      .attr('x', d => x(d))
      .attr('y', d => y(d))
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d))
      .attr('fill', '#FD0000')
    return null
  }).catch(e => console.log(e.message))
}
