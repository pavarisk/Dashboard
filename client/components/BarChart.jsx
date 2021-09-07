import React, { useEffect, useRef, useState } from 'react'
import { drawChart } from './charts/barchart'

function BarChart () {
  const [data, setData] = useState([])
  const d3chart = useRef()

  useEffect(() => {
    fetch('/api/v1/users')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const count = []
        data.map(person => {
          return count.push(person.age)
        })
        setData(count)
        drawChart(400, 600, count)
        return null
      })
      .catch(e => console.log(e.message))
  }, [])

  return (
    <div id='barchart' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
      <svg ref={d3chart}></svg>
    </div>
  )
}

export default BarChart
