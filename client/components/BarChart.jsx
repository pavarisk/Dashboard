import React, { useEffect, useRef } from 'react'
import { drawChart } from './charts/barchart'
import { connect } from 'react-redux'

function BarChart (props) {
  const { authenticated } = props
  const d3chart = useRef()

  useEffect(() => {
    fetch('/api/v1/data')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const values = []
        data.map(entry => {
          return values.push(entry.value)
        })

        drawChart(400, 600, values)
        return null
      })
      .catch(e => console.log(e.message))
  }, [])

  return (
    <div className='d-flex flex-column'>
      {authenticated.name && <h1 className='pt-4 text-center'>Hello {authenticated.name}</h1>}
      <div id='barchart' className='d-flex flex-column align-items-center'>
        <svg ref={d3chart}></svg>
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    authenticated: state.authenticated
  }
}

export default connect(mapStateToProps)(BarChart)
