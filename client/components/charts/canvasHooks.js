import { useRef } from 'react'
import * as d3 from 'd3'

const canvasRef = useRef(null)
const canvasObj = canvasRef.current
const ctx = canvasObj.getcontext('2d')

export function draw (ctx, location, data) {
  console.log('is it connectd?')
  const width = 80
  const height = 50
  const heartSVG = 'M0 200 v-200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z'
  const SVG_PATH = new Path2D(heartSVG)

  ctx.fillStyle = 'grey'
  ctx.shadowColor = 'purple'
  ctx.showBlur = 10
  ctx.save()
  ctx.restore()
  ctx.scale(SCALE, SCALE)
  ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET)
  ctx.rotate(255 * Math.PI / 180)
  ctx.fill(SVG_PATH)
  ctx.restore()

  //   .append('svg')
  //   .attr('width', width)
  //   .attr('height', height)
  //   .style('border', '1px solid black')

  // const selection = ctx.selectAll('rect').data(data)
  // const yScale = d3.scaleLinear()

  //   .domain([0, d3.max(data)])
  //   .range([0, height - 100])

  // selection

  //   .transition().duration(300)
  //   .attr('height', (d) => yScale(d))
  //   .attr('y', (d) => height - yScale(d))

  // selection

  //   .enter()
  //   .append('rect')
  //   .attr('x', (d, i) => i * 45)
  //   .attr('y', (d) => height)
  //   .attr('width', 40)
  //   .attr('height', 0)
  //   .attr('fill', 'orange')
  //   .transition().duration(300)
  //   .attr('height', (d) => yScale(d))
  //   .attr('y', (d) => height - yScale(d))

  //   svg.append('text')
  //     .attr('class', 'x label')
  //     .attr('text-anchor', 'end')
  //     .attr('x', width)
  //     .attr('y', height - 6)
  //     .text('hello there obi won')

  //   selection

//     .exit()
//     .transition().duration(300)
//     .attr('y', (d) => height)
//     .attr('height', 0)
//     .remove()
}

// const canvas = document.getElementById('canvas')
// const ctx = canvas.getContext('2d')

// const path1 = new Path2D()
// path1.rect(10, 10, 100, 100)

// const path2 = new Path2D(path1)
// path2.moveTo(220, 60)
// path2.arc(170, 60, 50, 0, 2 * Math.PI)

// ctx.stroke(path2)
