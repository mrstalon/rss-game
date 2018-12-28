import React from 'react'

import './screenshots.scss'

import Screenshot from './components/Screenshot/Screenshot'

class Screenshots extends React.Component {
  render() {
    return (
      <section id="screenshots">
        <div>
          <Screenshot imgId={0}/>
          <Screenshot imgId={1}/>
          <Screenshot imgId={2}/>
        </div>
        <div>
          <Screenshot imgId={3}/>
          <Screenshot imgId={4}/>
          <Screenshot imgId={5}/>
        </div>
      </section>
    )
  }
}

export default Screenshots