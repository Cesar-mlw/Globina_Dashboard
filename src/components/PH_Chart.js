import React from 'react'
import PropTypes from 'prop-types'
import { CardHeader, withStyles, Button, Card, CardContent, CardActions } from '@material-ui/core';
import { VictoryArea, VictoryChart, VictoryAxis, VictoryTheme } from 'victory'

const style = {
    card: {
        width: '30vw',
        height: '75vh',
        minWidth: 275,
    },
    div: {
        paddingTop: '8vh',
        paddingRight: '2vw'
    }
}
const data = [
    { quarter: 1, earnings: 7.2 },
    { quarter: 2, earnings: 7.0 },
    { quarter: 3, earnings: 7.9 },
    { quarter: 4, earnings: 7.6 }
]
class PHChart extends React.Component {
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
                                tickFormat={["Sample 1", "Sample 2", "Sample 3", "Sample 4"]}

                            />
                            <VictoryAxis
                                dependentAxis

                                tickFormat={(x) => (`PH ${x}`)}
                            />
                            <VictoryArea
                                style={{data: {fill: '#66ff66'}}}
                                data={data}
                                x="quarter"
                                y="earnings"
                            />
                        </VictoryChart>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Consultar</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}


export default withStyles(style)(PHChart)