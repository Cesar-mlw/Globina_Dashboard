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
        margin: '0 auto',
        width: '50%',
        height: '35%',
        marginTop: '10%'
    },
    TextField: {
        marginLeft: '4%',
        marginTop: '4%'

    }
}
class Login extends React.Component {
    state = {
        email: null,
        pass: null,
        auth: false,
    }
    
    render() {
        const { onClick, classes } = this.props
        return (
            <div className={classes.root}>
                <form>
                    <Paper elevation={4} className={classes.paper}>
                        <Typography variant='headline' >Bem Vindo ao Globina Dashboard!</Typography>
                        <TextField
                            id='email'
                            name='email'
                            label='E-mail'
                            margin='normal'
                            variant='outlined'
                            onChange={
                                event => {
                                    this.setState({email: event.target.value})
                                }
                            }
                            className={classes.TextField} 
                        />
                        <TextField
                            id='password'
                            name='password'
                            label='Password'
                            margin='normal'
                            variant='outlined'
                            onChange={
                                event => {
                                    this.setState({pass: event.target.value})
                                }
                            }
                            className={classes.TextField}
                        />
                        <label htmlFor='contained-button-file'>
                            <Button variant='raised' onClick={() => onClick(this.state.email, this.state.pass)}>
                                Entrar
                    </Button>
                        </label>
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
