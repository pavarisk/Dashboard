import { AUTHENTICATED } from '../action/authenticated'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      console.log(action.auth)
      return state
    default:
      return state
  }
}

export default reducer
