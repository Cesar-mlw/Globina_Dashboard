const login = (state = {email: '', pass: ''}, action) => {
    switch(action.type){
        case 'CHECK_DATA':
            
            if(action.email === 'cesar' /*state.email*/ && action.pass === '123' /*state.pass*/){
                return true
                
            }
            else{
                return false
            }

        case 'WECOME_USER':
            alert('WELCOME')

        case 'REJECT_USER':
            alert('GET OUT!!!')

        case 'CHANGE_EMAIL':
            return {email: action.text, ...state}

        case 'CHANGE_PASS':
            return {...state, pass: action.text}
            
        default:
            return state
    }
}


export default login