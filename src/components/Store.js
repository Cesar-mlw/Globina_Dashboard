import React from 'react'
import PropTypes from 'prop-types'
import { CardHeader, withStyles, Button, Card, CardContent, CardActions, CardMedia, Typography } from '@material-ui/core';
import Gaben from '../images/Gaben.jpg'
const style = {
    card: {
        width: '30vw',
        height: '75vh',
        minWidth: 275,
    },
    div: {
        paddingTop: '6vh',
        paddingRight: '2vw'
    },
    media : {
        height: 480,
    },
    text: {
        paddingTop: '1vh'
    }
}
class Store extends React.Component {
    render() {
        const { classes } = this.props

        return (
            <div className={classes.div}>
                <Card className={classes.card}>
                    <CardContent>
                        <CardHeader title='Globina - R$X,XX' />
                        <CardMedia
                            className={classes.media}
                            image={Gaben}
                        />
                        <Typography variant='body1' className={classes.text}>Disponivel!</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Comprar</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}


export default withStyles(style)(Store)