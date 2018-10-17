import { combineReducers } from 'redux'
import logins from './login'
import snackbars from './snackbar'


export default combineReducers({
    logins,
    snackbars
})