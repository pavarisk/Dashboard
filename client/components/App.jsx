import React /* ,{ useState, useEffect }*/ from 'react'
// import { getUsers } from '../apiClient'
// import UsersList from './UsersList'
import SideMenu from './SideMenu'
// import BarChart from './BarChart'
// import { useCanvas } from './hooks/useCanvas'
import { Canvas } from './Canvas'
import LoginPage from './LoginPage'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

const App = (props) => {
  // const [loaded, setLoaded] = useState(false)
  // useEffect(() => {
  //   const scriptTag = document.createElement('script')
  //   scriptTag.src = './hooks/useCanvas'
  //   scriptTag.addEventListener('load', () => setLoaded(true))
  //   document.body.appendChild(scriptTag)
  // }, [])
  // useEffect(() => {
  //   if (!loaded) return 'loaading'
  // }, [loaded])
  const { authenticated } = props
  // const [coordinates, setCoordinates, canvasRef, canvasWidth, CanvasHeight] = useCanvas()
  // const handleCanvasClick = (e) => {
  //   const currentCoord = { x: e.clientX, y: e.clientY }
  //   setCoordinates([...coordinates, currentCoord])
  // }
  // const handleClearCanvas = (e) => {
  //   setCoordinates([])
  // }
  return (<>
    <div className="d-flex mx-auto">
      <Route path='/' component={SideMenu} />
      {/* <Route path='/' component={Canvas} /> */}
      {/* <Canvas /> */}
      {/* <main className='App-main' > */}
      {/* <canvas
        className='App-canvas'
        ref={canvasRef}
        width={canvasWidth}
        height={CanvasHeight}
        onClick={handleCanvasClick}
      /> */}<canvas></canvas><script src='./charts/barChart' />
      {/* {loaded ? 'script loaded' : 'script not loaded'} */}
      {/* <div className='button'>
        <button onClick={handleClearCanvas}> CLEAR </button>
      </div> */}
      {/* </main> */}
      {/* <Route exact path='/' component={BarChart} /> */}
      <Route exact path ='/login' component={LoginPage} />
    </div>
  </>)
}

function mapStateToProps (state) {
  return {
    authenticated: state.authenticated
  }
}

export default connect(mapStateToProps)(App)
