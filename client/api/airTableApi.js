import request from 'superagent'

const serverURL = '/api/v1'

export function getAirtable () {
  return request
    .get(`${serverURL}/dashboard`)
    .then(data => data.body)
    .catch(e => console.log(e.message))
}
