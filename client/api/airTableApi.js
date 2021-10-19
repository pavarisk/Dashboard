import request from 'superagent'

const serverURL = '/api/v1'

export function getAirtable () {
  return request
    .get(`${serverURL}/dashboard`)
    .then(response => response.body)
}
