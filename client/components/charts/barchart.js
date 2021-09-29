// import {useRef} from 'react'
import * as d3 from 'd3'

export function drawChart (height, width, data) {
  const svg = d3.select('#barchart')

    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('border', '1px solid black')

  const selection = svg.selectAll('rect').data(data)
  const yScale = d3.scaleLinear()

    .domain([0, d3.max(data)])
    .range([0, height - 100])

  selection

    .transition().duration(300)
    .attr('height', (d) => yScale(d))
    .attr('y', (d) => height - yScale(d))

  selection

    .enter()
    .append('rect')
    .attr('x', (d, i) => i * 45)
    .attr('y', (d) => height)
    .attr('width', 40)
    .attr('height', 0)
    .attr('fill', 'orange')
    .transition().duration(300)
    .attr('height', (d) => yScale(d))
    .attr('y', (d) => height - yScale(d))

  svg.append('text')
    .attr('class', 'x label')
    .attr('text-anchor', 'end')
    .attr('x', width)
    .attr('y', height - 6)
    .text('hello there obi won')

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
