import React from 'react'
import { useCanvas } from './hooks/useCanvas'

export function Canvas () {
  const [coordinates, setCoordinates, canvasRef, canvasWidth, CanvasHeight] = useCanvas([])
  console.log(coordinates, setCoordinates, canvasWidth, CanvasHeight, 'dvsfssssss')
  const handleCanvasClick = (e) => {
    const currentCoord = { x: e.clientX, y: e.clientY }
    setCoordinates([...coordinates, currentCoord])
  }
  const handleClearCanvas = (e) => {
    setCoordinates([])
  }
  return (<>
    <canvas
      className='App-canvas'
      ref={canvasRef}
      width={canvasWidth}
      height={CanvasHeight}
      onClick={handleCanvasClick}
    />
    <div className='button'>
      <button onClick={handleClearCanvas}> CLEAR </button>
    </div>
  </>)
}
