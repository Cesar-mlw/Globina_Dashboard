import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Paper, TextField, Button } from '@material-ui/core'

const Login = ({onClick, value_email, onChange_email, onChange_pass, value_pass}) => {
    <div>
        <Paper elevation={1}>
            <Typography variant='headline' >Bem Vindo ao Globina Dsahboard!</Typography>
            <TextField 
                id='email'
                label='E-mail'
                value={value_email}
                onChange={onChange_email}
                margin='normal'
                variant='outlined'
            />
            <TextField
                id='password'
                label='Password'
                value={value_pass}
                onChange={onChange_pass}
                margin='normal'
                variant='outlined'
            />
            <Button variant='flat'>
                Cadastrar-se
            </Button>
            <Button variant='raised'>
                Entrar
            </Button>
        </Paper>
    </div>
}

export default Login 
