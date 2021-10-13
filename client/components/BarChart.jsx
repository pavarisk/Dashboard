import React, { useEffect } from 'react'
import { connect } from 'react-redux'
function BarChart (props) {
  const { authenticated } = props
  // const canvas = useRef(null)
  // const [image, setImage] = useState(null)
  // const onLoaded = () => {
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
