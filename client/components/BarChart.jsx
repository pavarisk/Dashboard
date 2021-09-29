import React, { useEffect, useRef } from 'react'
import { drawChart } from './charts/barchart'
import { connect } from 'react-redux'
function BarChart (props) {
  const { authenticated } = props
  const d3chart = useRef(null)

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

  // const d3chart = React.useRef<HTMLCanvasElement>(null)
  // function loaded(
  //   const canvasRef = useRef(null)
  //   const canvasObj = canvasRef.current
  //   const ctx = canvasObj.getcontext('2d')
  // )

  const canvas = document.getElementById('canvas')

  if (canvas != null) {
    canvas.getContext('2d')
  } else {
    // console.log(e.message)
  }

  // useEffect(() => {

  // }, [ctx])

  return (<>
    <div
      style={{
        textAlign: 'center'
      }}>
      <canvas
        id="canvas"
        ref={d3chart}
        width={500}
        height={500}
        style={{
          border: '2px solid #000',
          marginTop: 10
        }}
      ></canvas>
    </div>
    {/* <div className='d-flex flex-column'>
      {authenticated.name && <h1 className='pt-4 text-center'>Hello {authenticated.name}</h1>}
      {/* <div id='barchart' className='d-flex flex-column align-items-center'/> */}

    {/* </div> */}
    {/* <canvas id='canvaseta'></canvas><svg id='barchart'></svg><br/> </div> */}

  </>)
}

function mapStateToProps (state) {
  return {
    authenticated: state.authenticated
  }
}

export default connect(mapStateToProps)(BarChart)
