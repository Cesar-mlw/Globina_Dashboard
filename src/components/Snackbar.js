import React from 'react'
import PropTypes from 'prop-types'
import { Snackbar, IconButton } from '@material-ui/core'
import { Close } from '@material-ui/icons'

const SnackBar = ({ open, message, onClick, onClose }) => {
    return (
        <div>
            <SnackBar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
                open={open}
                autoHideDuration={6000}
                onClose={onClose}
                message={message}
                action={[
                    <IconButton
                        aria-label='Close'
                        color='inherit'
                        onClick={onClick}
                    >
                        <Close />
                    </IconButton>
                ]}
            />
        </div>
    )
}

Snackbar.propTypes = {
    open: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
}

export default Snackbar