const END_ROUND = 'END_ROUND'
const START_ROUND = 'START_ROUND'
const START_INITTING_GAME = 'START_INITTING_GAME'
const SET_LEVEL = 'SET_LEVEL'
const INIT_STATE = 'INIT_STATE'

export function endRound(winner) {
  return {
    type: END_ROUND,
    payload: winner
  }
}

export function startRound() {
  return {
    type: START_ROUND
  }
}

export function startInittingGame() {
  return {
    type: START_INITTING_GAME
  }
}

export function setLevel(level) {
  return {
    type: SET_LEVEL,
    payload: level
  }
}

export function initState() {
  return {
    type: INIT_STATE
  }
}