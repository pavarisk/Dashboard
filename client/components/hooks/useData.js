// import { useEffect } from 'react'
// import { drawChart } from '../charts/barchart'

// export function useData () {
//   const apiKey = process.env.API_KEY

//   useEffect(() => {
//     fetch(`https://api.airtable.com/v0/appGoOyAJaaiLpXRD/Test1/?api_key=${apiKey}`)
//       .then(response => response.json())
//       .then(result => {
//         const records = result.records
//         console.log(records)
//         const values = []
//         records.map(entry => {
//           return values.push(entry.fields.Themes)
//         })
//         console.log(values)
//         drawChart(400, 600, values)

//         drawChart(500, 800, values)
//         return null
//       })
//       .catch(e => console.log(e.message))
//   }, [])
// }
