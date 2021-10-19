import * as d3 from 'd3'
import { getAirtable } from '../../api/airTableApi'
// import dataAir from '../BarChart'
export function drawChart (result) {
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
  getAirtable(result).then(function (values) {
    // X axis
    console.log(result)
    const x = d3.scaleBand()
      .range([0, width])
      .domain(values.map(d => d.Themes))
      .padding(0.2)
    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end')

    // Add Y axis
    const y = d3.scaleLinear()
      .domain([0, 10])
      .range([height, 0])
    svg.append('g')
      .call(d3.axisLeft(y))

    // Bars
    svg.selectAll('barchart')
      .data(values)
      .join('rect')
      .attr('x', d => x(d.Themes))
      .attr('y', d => y(d.Themes))
      .attr('width', x.bandwidth())
      .attr('height', d => height - y(d.Themes))
      .attr('fill', '#5499C7')
    return null
  }).catch(e => console.log(e.message))
}
