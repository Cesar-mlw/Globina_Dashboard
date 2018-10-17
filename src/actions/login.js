export const checkData = (email, pass) =>({
    type: 'CHECK_DATA',
    email,
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





