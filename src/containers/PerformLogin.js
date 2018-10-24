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
        width: '33%',
        marginTop: '10%'
    },
    div: {
        opacity: 1,
        display: 'inline-block',
        marginLeft: '20%'
    },
    textField: {
        marginLeft: '4%',
        marginTop: '4%',

    },
    typography: {
        marginLeft: '8%',
        margintop: '2%'
    },
    button: {
        marginLeft: '10%',
        marginTop:'20%',
        marginBottom: '20%',
        
    }
}
class Login extends React.Component {
    state = {
        email: null,
        pass: null,
    }

    render() {
        const { onClick, classes } = this.props
        return (
            <div className={classes.root}>
                <form>
                    <Paper elevation={4} className={classes.paper}>
                        <Typography variant='headline' className={classes.typography}>Bem Vindo ao Globina Dashboard!</Typography>
                        <div className={classes.div}>
                            <TextField
                                id='email'
                                name='email'
                                label='E-mail'
                                margin='normal'
                                variant='outlined'
                                onChange={
                                    event => {
                                        this.setState({ email: event.target.value })
                                    }
                                }
                                className={classes.textField}
                            />
                            <TextField
                                id='password'
                                name='password'
                                label='Password'
                                margin='normal'
                                variant='outlined'
                                onChange={
                                    event => {
                                        this.setState({ pass: event.target.value })
                                    }
                                }
                                className={classes.textField}
                            />
                        </div>
                        <div className={classes.div}>
                                <Button variant='raised' size='large' color='primary' onClick={() => onClick(this.state.email, this.state.pass)} className={classes.button}>
                                    Entrar
                                </Button>
                        </div>
                    </Paper>
                </form>
            </div>
        )
    }
}

Login.propTypes = {
    onClick: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    onClick: (email, pass) => dispatch(checkData(email, pass))
})
export default connect(mapDispatchToProps, mapDispatchToProps)(withStyles(styles)(Login))
