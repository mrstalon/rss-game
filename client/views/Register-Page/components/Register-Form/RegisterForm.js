import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import './register-form.scss'

import StartGameButton from '../Start-Game-Button'

import { addUser } from '../../../../actions/users'
import { setErrorMessage } from '../../../../actions/error'


class RegisterForm extends React.Component {
  state = {
    userName: ''
  }

  handleChange = (e) => {
    e.persist()
    this.setState(() => {
      return {
        userName: e.target.value
      }
    })
  }

  registerUser = () => {
    const { addUser, setErrorMessage } = this.props
    const { userName } = this.state
    if (userName.trim() === '') {
      setErrorMessage('Пожалуйста, введите ваш никнейм')
    } else {
      addUser(userName)
    }
  }

  render() {
    const { errorMsg } = this.props
    const { userName } = this.state
    const { handleChange, registerUser } = this

    return (
      <form className="medium-text">
        <h2>Регистрация</h2>
        <label htmlFor="user-name">Ник в игре</label>
        <input
          type="text"
          className="medium-text"
          placeholder="Введите свое имя"
          name="user-name"
          to="/game"
          value={userName}
          onChange={handleChange}
        />
        {errorMsg && <label htmlFor="user-name" className="error-message">{errorMsg}</label>}
        <StartGameButton linkClasses="blue-white" registerUser={registerUser} />
      </form>
    )
  }
}

function mapStateToProps(state) {
  return {
    errorMsg: state.error.errorMsg
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addUser: (name) => dispatch(addUser(name, ownProps.history)),
    setErrorMessage: (msg) => {
      dispatch(setErrorMessage(msg))
      setTimeout(() => {
        dispatch(setErrorMessage(undefined))
      }, 2000)
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm))
