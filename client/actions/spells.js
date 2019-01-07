const SET_SPELLS_CONTROLLERS = 'SET_SPELLS_CONTROLLERS'
const START_SPELL_CASTING = 'START_SPELL_CASTING'
const FINISH_SPELL_CASTING = 'FINISH_SPELL_CASTING'


export function setSpellsControllers(spells) {
  return {
    type: SET_SPELLS_CONTROLLERS,
    payload: spells
  }
}

export function startSpellCasting() {
  return {
    type: START_SPELL_CASTING
  }
}

export function finishSpellCasting() {
  return {
    type: FINISH_SPELL_CASTING
  }
}