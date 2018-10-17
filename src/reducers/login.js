const logins = (state = { auth:false, email: '', pass:'' }, action) => {
    switch(action.type){
        case 'CHECK_DATA':
            if(action.email === 'Cesar' && action.pass === '123'){
                alert('GRANTED')
                return {...state, auth: true}
            }
            else{
                alert('DENIED')
                return state

            }
        case 'WECOME_USER':

        case 'REJECT_USER':

        default:
            return state
    }
}

export default logins