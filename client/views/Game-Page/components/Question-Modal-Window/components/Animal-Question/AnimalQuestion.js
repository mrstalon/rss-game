import React from 'react'
import { connect } from 'react-redux'

import './animal-question.scss'

import { KEY_ENTER_CODE } from '../../../../../../constants/keyCodes'
import { setAnswerInfo } from '../../../../../../actions/question-answer'
import getRandomAnimalTask from '../../../../../../helpers/questions/getRandomAnimalTask'

class AnimalQuestion extends React.Component {
  state = {
    userResult: '',
    error: '',
    result: undefined,
    img: undefined
  }

  componentDidMount() {
    const { imgName, result } = getRandomAnimalTask()
    this.setState({
      result,
      img: require(`../../../../../../assets/animal/${imgName}`)
    })
    window.addEventListener('keypress', this.handlePress)
    document.getElementById('answer-input').select()
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.handlePress)
  }

  addErrorMessage = (msg) => {
    this.setState({
      error: msg
    })
  }

  handlePress = (e) => {
    if (KEY_ENTER_CODE === e.keyCode) {
      this.checkUserAnswer()
    }
  }

  handleChange = (e) => {
    const { addErrorMessage } = this
    e.persist()
    if (e.target.value !== '') {
      addErrorMessage('')
    }
    this.setState(() => {
      return {
        userResult: e.target.value
      }
    })
  }

  checkUserAnswer = () => {
    const { addErrorMessage } = this
    const { userResult, result } = this.state
    const { setAnswerInfo } = this.props

    if (userResult === '') {
      addErrorMessage('Заполните поле')
      return
    }

    if (userResult.toLowerCase() === result.toLowerCase()) {
      setAnswerInfo({
        isAnswered: true,
        isUserAnswerCorrect: true,
        isAsked: false
      })
    } else {
      setAnswerInfo({
        isAnswered: true,
        isUserAnswerCorrect: false,
        isAsked: false
      })
    }
  }

  render() {
    const { userResult, error, img } = this.state
    const { handleChange, checkUserAnswer } = this

    return (
      <div className="animal-question-container">
        <h3>Назовите животное по фотографии</h3>
        <hr />
        <div>
          <div>
            <img src={img} />
          </div>
          <input
            id="answer-input"
            type="text"
            onChange={handleChange}
            value={userResult}
            placeholder="Введите ваш ответ"
          />
          {error && <span className="error-message">{error}</span>}
        </div>
        <hr />
        <button onClick={checkUserAnswer}>Ответить</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setAnswerInfo: (answerInfo) => dispatch(setAnswerInfo(answerInfo))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AnimalQuestion)
