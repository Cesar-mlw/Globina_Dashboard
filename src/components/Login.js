import React from 'react'
import PropTypes from 'prop-types'


const Login = ({onSubmit}) => {
    let email
    let pass
    return(
        <div>
            <Paper elevation={1}>
                <form onSubmit={onSubmit}>
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

        </div >
    )
}