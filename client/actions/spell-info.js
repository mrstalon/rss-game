const SET_CASTED_SPELL_INFO = 'SET_CASTED_SPELL_INFO'

export function setCastedSpellInfo (spellInfo) {
  return {
    type: SET_CASTED_SPELL_INFO,
    payload: spellInfo
  }
}