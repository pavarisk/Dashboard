export const AUTHENTICATED = 'AUTHENTICATED'

export function userAuth (user) {
  return {
    type: AUTHENTICATED,
    auth: user
  }
}
