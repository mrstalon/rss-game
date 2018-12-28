const START_GAME = 'START_GAME'
const ASK_QUESTION = 'ASK_QUESTION'
const CAST_SPELL = 'CAST_SPELL'
const SHOW_STATS = 'SHOW_STATS'
const END_GAME = 'END_GAME'

export function startGame() {
  return {
    type: START_GAME
  }
}

export function askQuestion() {
  return {
    type: ASK_QUESTION
  }
}

export function castSpell() {
  return {
    type: CAST_SPELL
  }
}

export function showStats() {
  return {
    type: SHOW_STATS
  }
}

export function endGame() {
  return {
    type: END_GAME
  }
}
