import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

function BarChart () {
  const d3chart = useRef()

  useEffect(() => {
    fetch('/api/v1/users')
      .then(response => response.json())
      .then(data => {
        console.log(data)

        const margin = { top: 50, right: 30, bottom: 30, left: 30 }
        const width = parseInt(d3.select('#barchart').style('width'))
        const height = parseInt(d3.select('#barchart').style('height'))

        const svg = d3.select(d3chart.current)
          .attr('width', width)
          .attr('height', height)
          .style('background-color', 'red')
          .append('g')
          .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
        return null
      })
      .catch(e => console.log(e.message))
  }, [])
  return (
    <div id='barchart'>
      <svg ref={d3chart}></svg>
    </div>
  )
}

export default BarChart
