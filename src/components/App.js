import React from 'react'
import { withStyles, MuiThemeProvider } from '@material-ui/core'
import Snackbar from '../containers/SnackBar'
import Login from '../containers/PerformLogin'

const styles = {
    backgroundImage: 'url("../images/Login_Background.jpeg")'
}

const App = () => (
    <div>
        <Login />
        <Snackbar />      
    </div>
)


export default withStyles(styles)(App)