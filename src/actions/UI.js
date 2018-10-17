export const deploySnackBar = (open, message) = ({
    type: 'DEPLOY_SNACKBAR',
    open,
    message
})

export const closeSnackbar = (open, message) = ({
    type: 'CLOSE_SNACKBAR',
    open, 
})