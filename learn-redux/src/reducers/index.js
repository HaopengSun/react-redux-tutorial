import { combineReducers } from 'redux'
import counterReducer from './counter'
import loggerReducer from './isLogged'

const allReducer = combineReducers({
  counter: counterReducer,
  logger: loggerReducer
})

export default allReducer