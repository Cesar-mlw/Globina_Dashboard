import { combineReducers } from 'redux'
import login from './login'
import snackbar from './snackBar'


export default combineReducers({
    login,
    snackbar
})