import React, { useEffect, useState, useRef } from 'react'
import { drawChart } from './charts/barchart'
import { connect } from 'react-redux'
function BarChart (props) {
  const { authenticated } = props
  const canvas = useRef(null)
  const [image, setImage] = useState(null)

  // const onLoaded = () => {
  useEffect(() => {
    fetch('/api/v1/data')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const values = []
        data.map(entry => {
          return values.push(entry.value)
        })
        console.log(values)
        drawChart(400, 600, values)
        return null
      })
      .catch(e => console.log(e.message))
  }, [])

  useEffect(() => {
    const catImage = new Image()
    console.log(catImage)
    catImage.src = 'https://thiscatdoesnotexist.com/'
    catImage.onLoad = () => setImage(catImage)
  }, [])

  useEffect(() => {
    if (image && canvas) {
      console.log(image, 'hi')
      const ctx = canvas.current.getContext('2d')
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, 400, 256 + 80)
      ctx.drawImage(image, (400 - 256) / 2, 40)
    }
  }, [image, canvas])
  // }
  // async function drawImg () {
  //   const ctx = document.getElementById('canvas').getContext('2d')
  //   console.log(img)
  //   // const imge = new Image()
  //   // imge.onload = function () {
  //   //   for (let i = 0; i < 4; i++) {
  //   //     for (let j = 0; j < 3; j++) {
  //   //       ctx.drawImage(imge, j * 50, i * 38, 50, 38)
  //   //     }
  //   //   }
  //   // }
  //   // imge.src = 'The_one.png'const img = new Image()
  //   const img = new Image()
  //   img.src = 'https://thiscatdoesnotexsist.com'
  //   img.onload = () => {
  //     ctx.drawImage(img, 0, 0)
  //   }
  // }

  // const d3chart = React.useRef<HTMLCanvasElement>(null)
  // function loaded(
  //   const canvasRef = useRef(null)
  //   const canvasObj = canvasRef.current
  //   const ctx = canvasObj.getcontext('2d')
  // )

  // const canvas = document.getElementById('canvas')

  // if (canvas != null) {
  //   canvas.getContext('2d')
  // } else {
  //   // console.log(e.message)
  // }

  // useEffect(() => {

  // }, [ctx])

  return (<>
    <div
      style={{
        textAlign: 'center'
      }}
      // onLoad={() => draw()}
    >
      <canvas
        id='canvas'
        ref={canvas}
        width={400}
        height={256 + 80}
        // onLoad={onLoaded()}
        style={{
          border: '2px solid #000',
          marginTop: 10,
          marginLeft: 10
        }}
        // imgsrc={'draw ? 1 : 0'}
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
