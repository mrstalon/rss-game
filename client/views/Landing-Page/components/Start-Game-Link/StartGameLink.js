import React from 'react'
import { Link } from 'react-router-dom'

import './start-game-button.scss'

class StartGameLink extends React.Component {
  startGame = () => {
    console.log('starting game....')
  }

  render() {
    const { linkClasses } = this.props

    return (
      <Link
        className={'start-game-button medium-text ' + linkClasses}
        to="/game"
        onClick={() => this.startGame()}
      >
        Играть
      </Link>
    )
  }
}

export default StartGameLink
