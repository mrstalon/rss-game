export default function(state = { score: 0}, action) {
  switch (action.type) {
    case 'ADD_SCORE': {
      return {
        score: state.score + action.payload 
      }
    }
    case 'RESET_SCORE': {
      return {
        score: 0
      }
    }
    case 'INIT_STATE': {
      return {
        score: 0
      }
    }
    default: {
      return state
    }
  }
}