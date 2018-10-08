import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Paper, TextField, Button } from '@material-ui/core'
import { checkData, welcomeUser, rejectUser } from '../actions/login';
import { connect } from 'react-redux'

const performLogin = ({ dispatch, auth }) => {
    let email
    let pass
    return (
        <div>
            <Paper elevation={1}>
                <form onSubmit={e => {
                    e.preventDefault()
                    dispatch(checkData(email.value, pass.value))
                
                }}>
                    <Typography variant='headline' >Bem Vindo ao Globina Dashboard!</Typography>
                    <input ref={node => email = node}/>
                    <input ref={node => pass = node}/>
                    
                    {/* <TextField
                        id='email'
                        label='E-mail'
                        margin='normal'
                        variant='outlined'
                        ref={node => email = node}
                    /> */}
                    {/* <TextField
                        id='password'
                        label='Password'
                        margin='normal'
                        variant='outlined'
                        ref={node => pass = node}
                    /> */}

                    <Button variant='raised' type='submit'>
                        Entrar
                </Button>
                </form>
                <Button variant='flat'>
                    Cadastrar-se
            </Button>
            </Paper>

        </div >)
}

export default connect()(performLogin) 
