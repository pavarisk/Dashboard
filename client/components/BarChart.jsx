import React, { useEffect, useRef } from 'react'
import { drawChart } from './charts/barchart'
import { connect } from 'react-redux'

function BarChart (props) {
  const { authenticated } = props
  const d3chart = useRef()
  const apiKey = process.env.API_KEY

  useEffect(() => {
    fetch(`https://api.airtable.com/v0/appGoOyAJaaiLpXRD/Test1/?api_key=${apiKey}`)
      .then(response => response.json())
      .then(result => {
        const records = result.records
        console.log(records)
        const values = []
        records.map(entry => {
          return values.push(entry.fields['Favourite number'])
        })

        drawChart(500, 800, values)
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
