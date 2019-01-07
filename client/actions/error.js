const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE'

export function setErrorMessage(msg) {
  return {
    type: SET_ERROR_MESSAGE,
    payload: msg
  }
}