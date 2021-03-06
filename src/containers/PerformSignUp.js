import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Paper, TextField, Button, withStyles } from '@material-ui/core'
import { connect } from 'react-redux'
import { checkData } from '../actions/Login'
const styles = {
    root: {
        flexGrow: 1
    },
    paper: {
        backgroundColor: '#fff',
        opacity: 0.9,
        margin: '0 auto',
        width: '38vw',
        height: '78vh',
        marginTop: '10%'
    },
    div: {
        opacity: 1,
        display: 'inline-block',
        marginLeft: '20%'
    },
    textField: {
        marginRight: '-3vw',
        marginTop: '4vh'

    },
    typography: {
        marginLeft: '8vw',
        margintop: '2vw'
    },
    button: {
        marginLeft: '10%',
        marginTop:'20%',
        marginBottom: '20%',
        
    }
}
class SignUp extends React.Component {
    state = {
        nome: null,
        cpf: null,
        telefone: null,
        serialGlobina: null,
        email: null,
        pass: null,
        confirmPass: null
    }

    render() {
        const { onClick, classes } = this.props
        return (
            <div className={classes.root}>
                <form>
                    <Paper elevation={4} className={classes.paper}>
                        <Typography variant='headline' className={classes.typography}>Vamos Fazer o seu Cadastro!</Typography>
                        <div className={classes.div}>
                            <TextField
                                id='nome'
                                name='nome'
                                label='Nome Completo'
                                margin='dense'
                                variant='outlined'
                                onChange={
                                    event => {
                                        this.setState({ nome: event.target.value })
                                    }
                                }
                                className={classes.textField}
                                fullWidth
                            />
                            <TextField
                                id='cpf'
                                name='cpf'
                                label='CPF'
                                margin='dense'
                                variant='outlined'
                                onChange={
                                    event => {
                                        this.setState({ cpf: event.target.value })
                                    }
                                }
                                className={classes.textField}
                                fullWidth
                            />
                            <TextField
                                id='telefone'
                                name='telefone'
                                label='Telefone'
                                margin='dense'
                                variant='outlined'
                                onChange={
                                    event => {
                                        this.setState({ telefone: event.target.value })
                                    }
                                }
                                className={classes.textField}
                                fullWidth
                            />
                            <TextField
                                id='serial'
                                name='serial'
                                label='Serial'
                                margin='dense'
                                variant='outlined'
                                onChange={
                                    event => {
                                        this.setState({ serialGlobina: event.target.value })
                                    }
                                }
                                className={classes.textField}
                                fullWidth
                            />
                            <TextField
                                id='email'
                                name='email'
                                label='E-mail'
                                margin='dense'
                                variant='outlined'
                                onChange={
                                    event => {
                                        this.setState({ email: event.target.value })
                                    }
                                }
                                className={classes.textField}
                                fullWidth
                            />
                            <TextField
                                id='pass'
                                name='pass'
                                label='Senha'
                                margin='dense'
                                variant='outlined'
                                onChange={
                                    event => {
                                        this.setState({ pass: event.target.value })
                                    }
                                }
                                className={classes.textField}
                                fullWidth
                            />
                            <TextField
                                id='confirmPass'
                                name='ConfirmPass'
                                label='Confirme sua senha'
                                margin='dense'
                                variant='outlined'
                                onChange={
                                    event => {
                                        this.setState({ confirmPass: event.target.value })
                                    }
                                }
                                className={classes.textField}
                                fullWidth
                            />
                        </div>
                        <div className={classes.div}>
                                <Button variant='raised' size='large' color='primary' onClick={() => onClick(this.state.email, this.state.pass)} className={classes.button}>
                                    Cadastrar!
                                </Button>
                        </div>
                    </Paper>
                </form>
            </div>
        )
    }
}

SignUp.propTypes = {
    onClick: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    onClick: console.log("Hello World!")
})
export default connect(mapDispatchToProps, mapDispatchToProps)(withStyles(styles)(SignUp))
