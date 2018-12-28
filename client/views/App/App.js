import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from 'store/index'
import Router from 'router/Router'

import './app.scss'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
