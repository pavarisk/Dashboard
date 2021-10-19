import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { drawChart } from './charts/barchart'
import { getAirtable } from '../api/airTableApi'
function BarChart (props) {
  const { authenticated } = props
  useEffect(() => {
    return getAirtable()
      .then((values) => {
        console.log(values)
        drawChart(400, 600, values)
        // drawChart(500, 800, values)
        return null
      })

      .catch(e => console.log(e.message))
  }, [])

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
