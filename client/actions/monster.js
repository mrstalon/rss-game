const DAMAGE_MONSTER = 'DAMAGE_MONSTER'
const SET_MONSTER = 'SET_MONSTER'
const UPGRADE_MONSTER = 'UPGRADE_MONSTER'
const SET_MAX_HEALTH = 'SET_MAX_HEALTH'

export function damageMonster(damagepoints) {
  return {
    type: DAMAGE_MONSTER,
    payload: damagepoints
  }
}

export function setMonster(monster) {
  return {
    type: SET_MONSTER,
    payload: monster
  }
}

export function upgradeMonster(newDamagepoints) {
  return {
    type: UPGRADE_MONSTER,
    payload: newDamagepoints
  }
}

export function setMaxHealth(health) {
  return {
    type: SET_MAX_HEALTH,
    payload: health
  }
}