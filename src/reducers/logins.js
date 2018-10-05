import { rejectUser } from '../actions'
import { Snackbar,  } from '@material-ui/core'




const login = (state = {user: '', password: '', authUser: false, authPass: false}, action) => {
    switch(action.type) {
        case 'CHECK_USER':
            if(state.user === action.user){
                return {
                    ...state,
                    authUser: true
                }
            }
            else{
                dispatch(rejectUser(alert('USER WRONG')/*COLOCAR COMPOENNTE DE SNACKBAR AQUI*/))
            } 
        case 'CHECK_PASS':
            if(state.password === action.pass){
                return {
                    ...state,
                    authPass: true
                }
            }
            else{
                dispatch(rejectUser(alert('PASSWORD WRONG')/*COLOCAR COMPOENNTE DE SNACKBAR AQUI*/))
            }
        
    }
}

