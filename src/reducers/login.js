import { bindActionCreators } from "redux";

const login = (state = {email: '', pass: '', auth: false}, action) => {
    switch(action.type){
        case 'CHECK_DATA':
        if(action.email === 'cesar' /*state.email*/ && action.pass === '123' /*state.pass*/){
                return {...state, auth: true}
            }
            else{
                return state
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