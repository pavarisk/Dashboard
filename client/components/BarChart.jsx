import React, { useEffect, useRef } from 'react'
import { drawChart } from './charts/barchart'
import { connect } from 'react-redux'
function BarChart (props) {
  const { authenticated } = props
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

        drawChart(400, 600, count)
        return null
      })
      .catch(e => console.log(e.message))
  }, [])

  return (<>

    <div className='d-flex flex-column'>
      {authenticated.name && <h1 className='pt-4 text-center'>Hello {authenticated.name}</h1>}
      <div id='barchart' className='d-flex flex-column align-items-center'/>
      <svg ref={d3chart}><rect height='30' width='40'></rect></svg><br/>
      {/* </div> */}
      <canvas id='barchart' className='d-flex flex-column align-items-center'></canvas><br/></div>

  </>)
}

function mapStateToProps (state) {
  return {
    authenticated: state.authenticated
  }
}

export default connect(mapStateToProps)(BarChart)
