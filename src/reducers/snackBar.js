const snackbar = (state = {open: false, message: ''}, action) => {
    switch(action.type){
        case 'DEPLOY_SNACKBAR':
            return{...state, open: true, message: action.message}
        case 'CLOSE_SNACKBAR':
            return{...state, open: false, message: ''}
        default:
            return state
    }
}

export default snackbar
