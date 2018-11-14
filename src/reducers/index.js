import { combineReducers } from 'redux'
import login from './login'
import snackbar from './snackbar'


export default combineReducers({
    login,
    snackbar
})