import React from 'react'

import './register-page.scss'

import RegisterForm from './components/Register-Form'
import GameRules from './components/Game-Rules'


class RegisterPage extends React.Component {
  render() {
    return (
      <div className="register-page">
        <h1 className="bold">"ЖЕСТКАЯ ИГРА"</h1>
        <RegisterForm />
        <GameRules />
      </div>
    )
  }
}

export default RegisterPage