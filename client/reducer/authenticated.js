import { AUTHENTICATED } from '../action/authenticated'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      console.log(state)
      return action.auth
    default:
      return state
  }
}

export default reducer
