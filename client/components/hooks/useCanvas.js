import { useRef, useEffect, useState } from 'react'
// import { draw } from '../charts/canvas'
export function useCanvas () {
  const canvasBeta = document.getElementById('canvasHooks')
  const canvasRef = useRef(null)
  const canvasObj = canvasRef.current
  const ctx = canvasObj.getcontext('2d')
  const [coordinates, setCoordinates] = useState([])
  const canvasWidth = canvasBeta.width
  const canvasHeight = canvasBeta.height

  useEffect(() => {
    // const canvasObj = canvasRef.current
    // const ctx = canvasObj.getContext('2d')

    ctx.clearReact(0, 0, canvasWidth, canvasHeight)
  })

  return [coordinates, setCoordinates, ctx, canvasWidth, canvasHeight]
}
