import React from 'react'
import { withStyles } from '@material-ui/core'
import Snackbar from '../containers/SnackBar'
import Login from '../containers/PerformLogin'
import image from '../images/Login_Background.jpeg'


const App = () => (
    <div>
        <img src={image} style={{position: 'fixed', top: '0', left: '0', minWidth: '100%', minHeight: '100%', zIndex: '-100'}}/>
        <Login />
        <Snackbar />      
    </div>
)


export default App