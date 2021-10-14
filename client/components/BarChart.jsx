import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { drawChart } from './charts/barchart'
function BarChart (props) {
  const { authenticated } = props
  const apiKey = process.env.API_KEY
  useEffect(() => {
    fetch(`https://api.airtable.com/v0/appGoOyAJaaiLpXRD/Test1/?api_key=${apiKey}`)
      .then(response => response.json())
      .then(result => {
        const records = result.records
        const values = []
        console.log(records)
        records.map(entry => {
          return values.push(entry.fields.Themes)
        })
        console.log(values)
        drawChart(400, 600, values)

        drawChart(500, 800, values)
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
