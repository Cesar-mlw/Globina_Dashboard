import React from 'react'
import { TextField, Paper, Button, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'


const Login = ({ onSubmit }) => {
    return(
        <div>
            <Paper elevation={1}>
                <form onSubmit={onSubmit}>
                    <Typography variant='headline' >Bem Vindo ao Globina Dashboard!</Typography>
                    <TextField
                        id='email'
                        label='E-mail'
                        margin='normal'
                        variant='outlined'
                    />
                    <TextField
                        id='password'
                        label='Password'
                        margin='normal'
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

export default Login