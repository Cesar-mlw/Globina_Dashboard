import React from 'react'
import PropTypes from 'prop-types'
import {Paper, withStyles} from '@material-ui/core'

const styles = {
    
}

class MainDashboard extends React.Component {
    
    
    render(){
        const {turbidez, ph, cloro, onClick, classes} = this.props
        return(
            <Paper elevation={4}>
                
            </Paper>
        )
    }
}


export default withStyles(styles)(MainDashboard)