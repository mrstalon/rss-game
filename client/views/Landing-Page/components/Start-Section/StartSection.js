import React from 'react'

import './start-section.scss'

import StartGameLink from '../Start-Game-Link'

class StartSection extends React.Component {
  render() {
    return (
      <section className="start-section">
        <h1 className="huge-text bold">Вперёд к победам на монстрами!</h1>
        <hr/>
        <p className="medium-text">
          Ты сможешь победить всех монстров в этом опасном и жестоком мире.
          Волшебный посох в руки и в бой!
        </p>
        <StartGameLink linkClasses={'white-black'}/>
      </section>
    )
  }
}

export default StartSection