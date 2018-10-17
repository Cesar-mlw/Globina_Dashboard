import React from 'react'
import { TextField, Paper, Button, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = {
    paper: {
        margin: "0 auto",
        width: 20,
        height: 20,
    },
    textField: {
        marginLeft: 400,
    }
}

const Login = ({ onSubmit }) => {
    return(
        <div className={styles.container}>
            <Paper elevation={1} className={styles.paper}>
                <form onSubmit={onSubmit}>
                    <Typography variant='headline' >Bem Vindo ao Globina Dashboard!</Typography>
                    <TextField
                        id='email'
                        className={styles.textField}
                        label='E-mail'
                        margin='small'
                        variant='outlined'
                    />
                    <TextField
                        id='password'
                        className={styles.textField}
                        label='Password'
                        margin='small'
                        variant='outlined'
                    />

                    <Button variant='raised' type='submit'>
                        Entrar
                </Button>
                </form>
                <Button variant='flat'>
                    Cadastrar-se
            </Button>
            </Paper>

        </div >
    )
}

Login.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(Login)