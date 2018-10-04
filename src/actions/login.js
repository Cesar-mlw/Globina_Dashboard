export const checkUser = user =>({
    type: 'CHECK_USER',
    user
})

export const checkPass = pass => ({
    type: 'CHECK_PASS',
    pass
})

export const redirectToMainPage = url =>({
    type: 'REDIRECT_TO_MAIN_PAGE',
    url
})

export const rejectUser = Component => ({
    type: 'REJECT_USER',
    Component
})





