import { combineReducers } from 'redux'
import inputChange from './inputChangeReducer'

const rootReducer = combineReducers({
    inputChange: inputChange
})

export default rootReducer
