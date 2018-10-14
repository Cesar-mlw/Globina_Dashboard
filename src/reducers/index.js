import { combineReducers } from 'redux'
import login from './login'
import snackBar from './snackBar'


export default combineReducers({
    login,
    snackBar
})