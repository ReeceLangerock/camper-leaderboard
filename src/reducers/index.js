import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {camperReducer} from './reducers'

export default combineReducers({
  routing: routerReducer,
  camperReducer
  
})
