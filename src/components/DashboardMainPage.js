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
        page: 'Dados'
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

     handlePageChange = (selected) => {
         console.log(event.target);
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
                        <ListItem button key='Dados' /* Estou querendo usar um handler soh para mudar entre as paginas do drawer*/>
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
                        <ListItem button key='Nossos_Produtos' selected>
                            <ListItemIcon><Store/></ListItemIcon>
                            <ListItemText primary='Família Surgate' />
                        </ListItem>
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar}>
                        <Store_Card/>
                        
                        
                        { /*charts */
                            /* <PHChart />
                        <TURChart /> */}
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