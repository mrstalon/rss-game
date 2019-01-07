const CHANGE_USER_NAME = 'CHANGE_USER_NAME'


export function changeUserName(newName) {
  return {
    type: CHANGE_USER_NAME,
    payload: newName
  }
}