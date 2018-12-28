import React from 'react'
import { connect } from 'react-redux'

import './screenshot.scss'

import { showChoosedScreenshot } from '../../../../../../actions/screenshots'
import screenshotsInfo from '../../../../../../constants/screenshots'


class Screenshot extends React.Component {
  state = {
    img: require(`../../../../../../assets/game-screenshot-${this.props.imgId}.jpg`)
  }

  showMenu = () => {
    const { showScreenshot, imgId } = this.props
    showScreenshot(imgId)
  }

  render() {
    const { showMenu } = this
    const { img } = this.state
    const { imgId } = this.props
    const text = screenshotsInfo[imgId].text

    return (
      <a className="screenshot-wrapper" onClick={() => showMenu()}>
        <img className="screenshot" src={img} />
        <div className="screenshot-caption">
          <h1 className="medium-text">Геймплей</h1>
          <p className="medium-text">{text}</p>
        </div>
      </a>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    showScreenshot: (id) => dispatch(showChoosedScreenshot(id))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Screenshot)
