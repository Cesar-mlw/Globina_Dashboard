import React from 'react'
import PropTypes from 'prop-types'
import { CardHeader, withStyles, Button, Card, CardContent, CardActions } from '@material-ui/core';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory'

const style = {
    card: {
        width: '30vw',
        height: '75vh',
        minWidth: 275,
    },
    div: {
        paddingTop: '6vh',
        paddingRigth: '2vw'
    }
}
const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
]
class TURChart extends React.Component {
    render() {
        const { classes } = this.props

        return (
            <div className={classes.div}>
                <Card className={classes.card}>
                    <CardContent>
                        <CardHeader title='Nível de PH' />
                        <VictoryChart
                            theme={VictoryTheme.material}
                            domainPadding={20}
                        >
                            <VictoryAxis
                                tickValues={[1, 2, 3, 4]}
                                tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}

                            />
                            <VictoryAxis
                                dependentAxis

                                tickFormat={(x) => (`$${x / 1000}k`)}
                            />
                            <VictoryBar
                                data={data}
                                x="quarter"
                                y="earnings"
                            />
                        </VictoryChart>
                    </CardContent>
                    <CardActions>
                        <Button size="small">PIROQUIO</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}


export default withStyles(style)(TURChart)