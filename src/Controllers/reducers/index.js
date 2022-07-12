//en este archivo se combinan los reducers
import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import generalReducer from './generalReducer'

export default combineReducers({
    sessionReducer,
    generalReducer
})
