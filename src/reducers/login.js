const logins = (state = {user: '', pass: '', auth:false}, action) => {
    switch(action.type){
        case 'CHECK_DATA':
            if(action.user === state.user && action.pass === state.pass){
                return {...state, auth: true}
            }
        case 'WECOME_USER':

        case 'REJECT_USER':
    }
}