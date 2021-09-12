import request from 'superagent'

const baseUrl = '/api/v1'

export function getUsers () {
  return request.get(`${baseUrl}/users`)
    .then(res => res.body)
}

export function getUserByName (name) {
  return request.post(`${baseUrl}/users`)
    .send({ name })
    .then(res => res.body)
}
