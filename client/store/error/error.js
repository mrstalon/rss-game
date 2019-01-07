export default function(state = { errorMsg: undefined }, action) {
  switch (action.type) {
    case 'SET_ERROR_MESSAGE': {
      return {
        errorMsg: action.payload
      }
    }
    default: {
      return state
    }
  }
}