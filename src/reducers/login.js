const login = (state = { auth:false, email: '', pass:'' }, action) => {
    switch(action.type){
        case 'CHECK_DATA':
        console.log(action.email + ' ' + action.pass);
            if(action.email === 'Cesar' && action.pass === '123'){
                console.log(action.email + ' ' + action.pass);
                alert('GRANTED')
                return {...state, auth: true}
            }
            else{
                alert('DENIED')
                return state

            }
        case 'WECOME_USER':
            alert('WELCOME')

        case 'REJECT_USER':
        default:
            return state
    }
}

export default login
