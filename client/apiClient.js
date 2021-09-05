import request from 'superagent'

const baseUrl = '/api/v1'

export function getGreeting () {
  return request.get('/greeting')
    .then(res => res.body.greeting)
}

export function getUsers () {
  return request.get(`${baseUrl}/users`)
    .then(res => res.body)
}
