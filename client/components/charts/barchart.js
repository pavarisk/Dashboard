// import {useRef} from 'react'
import * as d3 from 'd3'

export function drawChart (data) {
  const margin = { top: 30, right: 30, bottom: 70, left: 60 }
  const width = 460 - margin.left - margin.right
  const height = 400 - margin.top - margin.bottom
  const svg = d3.select('#barchart')
  const selection = svg.selectAll('rect').data(data)
  // .append('svg')
  const dataBeta = Array.from(data)
  // .append('svg')
  // .attr('width', width)
  // .attr('height', height)
  // .style('border', '1px solid black')
  console.log(selection)
  // .range([0, height - 100])

  selection
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform',
      'translate(' + margin.left + ',' + margin.top + ')')
    // .transition().duration(300)
    // .attr('height', (d) => yScale(d))
    // .attr('y', (d) => height - yScale(d))
    // svg.selectAll('mybar')

  const x = d3.scaleBand()
    .range([0, width])
    .domain(dataBeta.map(function (d) { return d.name }))
    .domain([0, d3.max(dataBeta)])
    .padding(0.2)
    .data(dataBeta)

  const y = d3.scaleLinear()
    .domain([0, 100])
    .range([height, 0])
  svg.append('g')
    .call(d3.axisLeft(y))

    .enter()
    .append('rect')
    .attr('x', function (d) { return x(d.Name) })
    .attr('y', function (d) { return y(d.Value) })
    .attr('width', x.bandwidth())
    .attr('height', function (d) { return height - y(d.Value) })
    .attr('fill', '#69b3a2') // cryan greenish
    // .attr('x', (d, i) => i * 45)
    // .attr('y', (d) => height)
    // .attr('width', 40)
    // .attr('height', 0)
    // .attr('fill', 'grey')
    // .transition().duration(300)
    // .attr('height', (d) => yScale(d))
    // .attr('y', (d) => height - yScale(d))

  // svg.append('text')
  //   .attr('class', 'x label')
  //   .attr('text-anchor', 'end')
  //   .attr('x', width)
  //   .attr('y', height - 6)
  //   .text('hello there obi won')

  selection
    .exit()
    .transition().duration(300)
    .attr('y', (d) => height)
    .attr('height', 0)
    .remove()
}
// const canvas = document.getElementById('canvas')
// const ctx = canvas.getContext('2d')

// ctx.fillRect('drawChar')
// // const svg = d3.select('#barchart')

// d3.csv('data', function (error, data) {
//   if (error) throw error

//   // format the data
//   data.forEach(function (d) {
//     d.sales = +d.sales
//   })

//   // Scale the range of the data in the domains
//   x.domain(data.map(function (d) { return d.salesperson }))
//   y.domain([0, d3.max(data, function (d) { return d.sales })])

//   // append the rectangles for the bar chart
//   svg.selectAll('.bar')
//     .data(data)
//     .enter().append('rect')
//     .attr('class', 'bar')
//     .attr('x', function (d) { return x(d.salesperson) })
//     .attr('width', x.bandwidth())
//     .attr('y', function (d) { return y(d.sales) })
//     .attr('height', function (d) { return height - y(d.sales) })

//   // add the x Axis
//   svg.append('g')
//     .attr('transform', 'translate(0,' + height + ')')
//     .call(d3.axisBottom(x))

//   // add the y Axis
//   svg.append('g')
//     .call(d3.axisLeft(y))
// })

// // append the svg object to the body of the page

// // Parse the Data
// // d3.csv(, function (data) {
// // X axis

// // const yScale = d3.scaleLinear()

// svg.append('g')
//   .attr('transform', 'translate(0,' + height + ')')
//   .call(d3.axisBottom(x))
//   .selectAll('text')
//   .attr('transform', 'translate(-10,0)rotate(-45)')
//   .style('text-anchor', 'end')

// // Add Y axis

// // Bars
