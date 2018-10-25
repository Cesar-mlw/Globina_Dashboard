import React from 'react'
import Snackbar from '../containers/SnackBar'
import Login from '../containers/PerformLogin'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import image from '../images/Login_Background.jpeg'

const Login = () => (
    <div>
        <img src={image} style={{ position: 'fixed', top: '0', left: '0', minWidth: '100%', minHeight: '100%', zIndex: '-100' }} />
        <Login />
        <Snackbar />
    </div>)

const App = () => (
    <Router>
    
    </Router>
)


export default App