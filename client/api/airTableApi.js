import request from 'superagent'
const apiKey = process.env.API_KEY

export function airTableData () {
  return request
    .fetch(`https://api.airtable.com/v0/appGoOyAJaaiLpXRD/Test1/?api_key=${apiKey}`)
    .then(response => response.json())
    .then(result => {
      const records = result.records
      const data = []
      console.log(records)
      records.map(entry => {
        return data.push(entry.fields.Themes)
      })
      console.log(data)
      return null
    })
    .catch(e => console.log(e.message))
}
