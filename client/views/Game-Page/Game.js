import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { askQuestion, showStats, castSpell, startGame, endGame } from 'actions/actions'

class Game extends Component {
  askQuestion() {
    console.log('rendering question tab')
    console.log('----------')
    this.props.FSMaskQuestion()
  }

  showStats() {
    console.log('showing stats table')
    console.log('----------')
    this.props.FSMshowStats()
  }

  castSpell() {
    console.log('SPEEEELLLLLL CASTING')
    console.log('one more turn')
    console.log('----------')
    this.props.FSMcastSpell()
  }

  startNewGame() {
    console.log('starting new game')
    console.log('----------')
    this.props.FSMstartGame()
  }

  endGame() {
    console.log('ending game')
    console.log('----------')
    this.props.FSMendGame()
  }

  render() {
    let htmlToRender
    if (this.props.fsm.currentFSMstate.name === 'Choosing spell') {
      htmlToRender = <button onClick={() => this.askQuestion()}>Choose Spell</button>
    } else if (this.props.fsm.currentFSMstate.name === 'Asking question') {
      htmlToRender = (
        <div>
          <button onClick={() => this.showStats()}>Answer Question (end game)</button>
          <button onClick={() => this.castSpell()}>Answer Question</button>
        </div>
      )
    } else if (this.props.fsm.currentFSMstate.name === 'Showing stats') {
      htmlToRender = (
        <div>
          <button onClick={() => this.startNewGame()}>Start new game</button>
          <Link onClick={() => this.endGame()} to="/">
            End game
          </Link>
        </div>
      )
    }

    return (
      <div>
        <h1>Game</h1>
        <h3>{this.props.fsm.currentFSMstate.name}</h3>
        {htmlToRender}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    fsm: state.fsm
  }
}

function mapDispatchToProps(dispatch) {
  return {
    FSMaskQuestion: () => dispatch(askQuestion()),
    FSMshowStats: () => dispatch(showStats()),
    FSMcastSpell: () => dispatch(castSpell()),
    FSMstartGame: () => dispatch(startGame()),
    FSMendGame: () => dispatch(endGame())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)
