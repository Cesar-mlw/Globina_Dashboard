import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import { withStyles, Drawer, AppBar, Toolbar, List, CssBaseline, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Menu, Dashboard, Assignment, ChevronLeft, ChevronRight, Storage, Store } from '@material-ui/icons'
import PHChart from './PH_Chart'
import TURChart from './TURChart'
import Store_Card from './Store'
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
        alignItems: 'left',
        flexWrap: 'wrap',
        justifyContent: 'start',
        flexDirection: 'row',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});

//FOR TESTING PURPOSES


class MainDashboard extends React.Component {
    state = {
        open: false,
        page: null
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

     handlePageChange = (tab) => {
        if(tab === "dado"){
            this.setState({page: 'dado'})
        }
        else if(tab === 'rotina'){
            this.setState({page: 'rotina'})
        }
        else if(tab === 'historico'){
            this.setState({page: 'historico'})
        }
        else{
            this.setState({page: 'store'})
        }
     }

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
                        <ListItem button key='Dados' onClick={() => this.handlePageChange("dado")}>
                            <ListItemIcon><Dashboard /></ListItemIcon>
                            <ListItemText primary='Dados' />
                        </ListItem>
                        <ListItem button key='Rotinas' onClick={() => this.handlePageChange("rotina")}>
                            <ListItemIcon><Assignment /></ListItemIcon>
                            <ListItemText primary='Rotinas' />
                        </ListItem>
                        <ListItem button key='Histórico' onClick={() => this.handlePageChange("historico")}>
                            <ListItemIcon><Storage /></ListItemIcon>
                            <ListItemText primary='Histórico' />
                        </ListItem>
                        <ListItem button key='Nossos_Produtos' onClick={() => this.handlePageChange("store")}>
                            <ListItemIcon><Store/></ListItemIcon>
                            <ListItemText primary='Família Surgate' />
                        </ListItem>
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar}>
                        {this.state.page === 'dado' && (<div className={classes.toolbar}><PHChart/> <TURChart/></div>)}
                        {this.state.page === 'rotina' && (<div><Typography>ROTINA PAGE</Typography></div>)}
                        {this.state.page === 'historico' && (<div><Typography>HISTORICO PAGE</Typography></div>)}
                        {this.state.page === 'store' && (<Store_Card/>)}
                    </div>
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