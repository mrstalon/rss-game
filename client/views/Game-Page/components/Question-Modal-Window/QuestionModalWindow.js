import React from 'react'
import { connect } from 'react-redux'

import './question-modal-window.scss'

import MathQuestion from './components/Math-Question'
import TranslateQuestion from './components/Translate-Question'
import MixedLettersQuestion from './components/Mixed-Letters-Question'
import TTSQuestion from './components/TTS-Question'
import BalloonBurstQuestion from './components/Balloon-Burst-Question'
import SequenceQuestion from './components/Sequence-Question'
import ComparisonQuestion from './components/Comparison-Question'
import ExtraWordQuestion from './components/Extra-Word-Question'
import GeographyQuestion from './components/Geography-Question'

class QuestionModalWindow extends React.Component {
  getQuestionToAsk = () => {
    const { spellElement } = this.props
    if (spellElement === 'fire') {
      return <MathQuestion />
    }
  }

  render() {
    // const questionToAsk = this.getQuestionToAsk()
    const questionToAsk = <TTSQuestion />

    return (
      <div className="modal-question-mask">
        <div className="modal-question-wrapper">
          {questionToAsk}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    spellElement: state.castedSpellInfo.spellElement
  }
}

export default connect(mapStateToProps, null)(QuestionModalWindow)
