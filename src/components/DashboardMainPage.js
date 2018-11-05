import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import { withStyles, Button, Card, Drawer, AppBar, Toolbar, List, CssBaseline, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText, CardContent, CardActions } from '@material-ui/core';
import { Menu, Dashboard, Assignment, ChevronLeft, ChevronRight, Storage } from '@material-ui/icons'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory'
const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
    card: {
        width: '30vw',
        height: '75vh',
        minWidth: 275,
    }
});

//FOR TESTING PURPOSES

const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
]

class MainDashboard extends React.Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes, theme, ph, turbidez, cloro } = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: this.state.open,
                    })}
                >
                    <Toolbar disableGutters={!this.state.open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, {
                                [classes.hide]: this.state.open,
                            })}
                        >
                            <Menu />
                        </IconButton>
                        <Typography variant="headline" color="inherit" noWrap>
                            Globina Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                    }}
                    open={this.state.open}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        <ListItem button key='Dados'>
                            <ListItemIcon><Dashboard /></ListItemIcon>
                            <ListItemText primary='Dados' />
                        </ListItem>
                        <ListItem button key='Rotinas'>
                            <ListItemIcon><Assignment /></ListItemIcon>
                            <ListItemText primary='Rotinas' />
                        </ListItem>
                        <ListItem button key='Histórico'>
                            <ListItemIcon><Storage /></ListItemIcon>
                            <ListItemText primary='Histórico' />
                        </ListItem>
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Card className={classes.card}>
                        <CardContent>
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
                </main>
            </div>
        );
    }
}

MainDashboard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MainDashboard);