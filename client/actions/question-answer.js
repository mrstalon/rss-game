const SET_ANSWER_INFO = 'SET_ANSWER_INFO'
const ASK_QUESTION = 'ASK_QUESTION'
const SET_INITIAL_QUESTION_STATE = 'SET_INITIAL_QUESTION_STATE'

export function setAnswerInfo(answerInfo) {
  return {
    type: SET_ANSWER_INFO,
    payload: answerInfo
  }
}

export function askQuestion() {
  return {
    type: ASK_QUESTION
  }
}

export function setInitialQuestionState() {
  return {
    type: SET_INITIAL_QUESTION_STATE
  }
}