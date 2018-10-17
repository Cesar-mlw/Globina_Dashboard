import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Paper, TextField, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { checkData } from '../actions/login'
const styles = {
    
}
const Login = ({onClick}) => {
    let state = {
        email: null,
        pass: null,
        auth: false,
    }

    return(
    <div>
        <form>
            <Paper elevation={1}>
                <Typography variant='headline' >Bem Vindo ao Globina Dsahboard!</Typography>
                <TextField
                    id='email'
                    name= 'email'
                    label='E-mail'
                    margin='normal'
                    variant='outlined'
                    onChange={
                        event => {
                            state.email = event.target.value
                        }
                    }
                />
                <TextField
                    id='password'
                    name= 'password'
                    label='Password'
                    margin='normal'
                    variant='outlined'
                    onChange={
                        event => {
                            state.pass = event.target.value
                        }
                    }
                />
                <label htmlFor='contained-button-file'>
                    <Button variant='raised' onClick={() => onClick(state.email, state.pass)}>
                        Entrar
                    </Button>
                </label>
            </Paper>
        </form>
    </div>
    )}

Login.propTypes = {
    onClick: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    onClick: (email, pass) => dispatch(checkData(email, pass))
})
export default connect(mapDispatchToProps, mapDispatchToProps)(Login)
