import React from 'react'
import PropTypes from 'prop-types'
import { Paper, withStyles, Typography } from '@material-ui/core'

const styles = {
    paper: {
        margin: '0 auto',
        width: '90vw',
        height: '95vh',
    }
}

class MainDashboard extends React.Component {
    
    
    render(){
        const {turbidez, ph, cloro, onClick, classes} = this.props
        return(
            <Paper elevation={4} className={classes.paper}>
                <Typography></Typography>
            </Paper>
        )
    }
}


export default withStyles(styles)(MainDashboard)