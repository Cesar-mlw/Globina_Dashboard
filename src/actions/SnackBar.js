export const deploySnackBar = (open, message) => ({
    type: 'DEPLOY_SNACKBAR',
    open,
    message
})

export const closeSnackBar = () => ({
    type: 'CLOSE_SNACKBAR'
})