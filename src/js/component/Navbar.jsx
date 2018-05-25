import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
//import { Modal } from "react-bootstrap";
//import { Button } from "react-bootstrap";
//import $ from "jquery";

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';

import {UserContext} from '../component/user-context';

import Login from './Login.jsx';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  text: {
    color: "white",
    textDecoration: "none"
  }
};

class Navbar extends React.Component{
    
    handleChange(event, checked) {
        this.setState({ auth: checked });
    }
    
    handleMenu(event) {
        this.setState({ anchorEl: event.currentTarget });
    }
    
    handleClose(){
        this.setState({ anchorEl: null });
    }

    constructor(props, context){
        super(props, context);
        
        this.handleMenu = this.handleMenu.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
        this.state = {
            auth: false,
            anchorEl: null
        };
    }
    
    render(){
        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);
            
        let homeActive = this.props.currentView === "home" ? "active" :"";
        
        return(
            <div className={classes.root}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            <Link className={classes.text} to={"/"}>4GeeksAcademy Events</Link>
                        </Typography>
                        
                        {auth && (
                        <div>
                            <IconButton
                              aria-owns={open ? 'menu-appbar' : null}
                              aria-haspopup="true"
                              onClick={this.handleMenu}
                              color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                              id="menu-appbar"
                              anchorEl={anchorEl}
                              anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                              }}
                              transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                              }}
                              open={open}
                              onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                            </Menu>
                        </div>
                        ) }
                        {!auth && (
                        <div>
                            <UserContext.Consumer>
                                { (user) => (
                                    <Login sessionData={user} />
                                ) }
                            </UserContext.Consumer>
                        </div>
                        ) }
                    </Toolbar>
                </AppBar>
            </div>
            );
    }
}
Navbar.propTypes = {
  sessionData: PropTypes.object,
  currentView: PropTypes.string,
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Navbar);