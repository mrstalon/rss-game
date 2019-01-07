const RESET_SCORE = 'RESET_SCORE'
const ADD_SCORE = 'ADD_SCORE'

export function resetScore() {
  return {
    type: RESET_SCORE
  }
}

export function addScore(score) {
  return {
    type: ADD_SCORE,
    payload: score
  }
}