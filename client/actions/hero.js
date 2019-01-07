const HEAL_HERO = 'HEAL_HERO'
const DAMAGE_HERO = 'DAMAGE_HERO'
const SET_HERO = 'SET_HERO'

export function healHero(healpoints) {
  return {
    type: HEAL_HERO,
    payload: healpoints
  }
}

export function damageHero(damagepoints) {
  return {
    type: DAMAGE_HERO,
    payload: damagepoints
  }
}

export function setHero(hero) {
  return {
    type: SET_HERO,
    payload: hero
  }
}