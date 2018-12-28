import { createStore, combineReducers } from 'redux'

import fsm from './finite-state-machine/fsm'
import choosedScreenshot from './choosed-screenshot/choosed-screenshot'

const reducer = combineReducers({ fsm, choosedScreenshot })
const store = createStore(reducer)

export default store
