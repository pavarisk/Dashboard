import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { drawChart } from './charts/barchart'
import { getAirtable } from '../api/airTableApi'
function BarChart (props) {
  // const { authenticated } = props
  useEffect(() => {
    return getAirtable()
      .then((themes) => {
        console.log(themes)
        drawChart(400, 600, themes)
        return null
      })

      .catch(e => console.log(e.message))
  }, [])

  return (<>
    <div id='barchart'></div>
  </>)
}

function mapStateToProps (state) {
  return {
    authenticated: state.authenticated
  }
}

export default connect(mapStateToProps)(BarChart)
