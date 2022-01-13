import { combineReducers } from 'redux'
import listReducer from './listReducer'
import userReducer from './userReducer'

const mainReducer = combineReducers({
  list: listReducer,
  user: userReducer
})

export default mainReducer;
