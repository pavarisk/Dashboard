import * as d3 from 'd3'

const margin = {
  top: 20,
  bottom: 20,
  left: 10,
  right: 10
}

export function drawChart (height, width, data) {
  const svg = d3.select('#barchart')

    .append('svg')

    .attr('width', width)

    .attr('height', height)

    .style('border', '1px solid black')

  var selection = svg.selectAll('rect').data(data)
  var yScale = d3.scaleLinear()

    .domain([0, d3.max(data)])

    .range([0, height - margin.bottom, margin.top])

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

  selection

    .exit()

    .transition().duration(300)

    .attr('y', (d) => height)

    .attr('height', 0)

    .remove()

  // var i = 0

  // function changeData () {
  //   drawChart(datasets[i++])

  //   if (i == datasets.length) i = 0
  // }

  // window.addEventListener('load', function () {
  //   changeData()
  // })
}
