import React from 'react'
import PropTypes from 'prop-types'
import { CardHeader, withStyles, Button, Card, CardContent, CardActions, CardMedia, Typography } from '@material-ui/core';
import Globina from '../images/Globina_Spyder.jpeg'
const style = {
    card: {
        width: '28vw',
        height: 'auto',
        minWidth: 275,
    },
    div: {
        marginTop: '9vh',
        marginRight: '2vw',
    },
    mainDiv: {
      display: 'flex',
      flexGrow: 1,
      flexDirection: 'row',
      width: '25vw',
      height: '18vh',
      flexWrap: 'wrap'
    },
    media: {
        height: 260,
    },
    text: {
        paddingTop: '1vh'
    }
}
class Store extends React.Component {
    render() {
        const { classes } = this.props

        return (
            <div className={classes.mainDiv}>
                <div className={classes.div}>
                    <Card className={classes.card}>
                        <CardContent>
                            <CardHeader title='GL1- R$4600,00' />
                            <CardMedia
                                className={classes.media}
                                image={Globina}
                            />
                            <Typography variant='body1' className={classes.text}>A Globina é um robô que faz o controle da sua piscina, como também limpa ela através da coleta de pequenos objetos</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant='outlined' color='primary'>Comprar</Button>
                        </CardActions>
                    </Card>

                </div>
                <div className={classes.div}>
                    <Card className={classes.card}>
                        <CardContent>
                            <CardHeader title='GL2 - R$X,XX' />
                            <CardMedia
                                className={classes.media}
                                image={Globina}
                            />
                            <Typography variant='body1' className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus ac dui non pellentesque. Nam.</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant='outlined' color='primary'>Comprar</Button>
                        </CardActions>
                    </Card>

                </div>
                <div className={classes.div}>
                    <Card className={classes.card}>
                        <CardContent>
                            <CardHeader title='GL3 - R$X,XX' />
                            <CardMedia
                                className={classes.media}
                                image={ Globina}
                            />
                            <Typography variant='body1' className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus ac dui non pellentesque. Nam.</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant='outlined' color='primary'>Comprar</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>    
        )
    }
}


export default withStyles(style)(Store)