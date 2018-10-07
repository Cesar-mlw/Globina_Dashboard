export const checkData = (user, pass) =>({
    type: 'CHECK_USER',
    user,
    pass
})

export const welcomeUser = url =>({
    type: 'WELCOME_USER',
    url
})

export const rejectUser = Component => ({
    type: 'REJECT_USER',
    Component
})





