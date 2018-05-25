import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from "prop-types";

import {UserContext} from '../component/user-context';

import MeetupActions from '../actions/MeetupActions.jsx';

export default class Login extends React.Component {
    constructor(props, context){
        super(props, context);
        
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.login = this.login.bind(this);
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleMenu = this.handleMenu.bind(this);
        this.handleCloseMenu = this.handleCloseMenu.bind(this);
        
        this.state = {
            open: false,
            username: "",
            password: "",
            anchorEl: null
        };
    }
  
    handleClickOpen(){
        this.setState({ open: true });
    }
    
    handleClose(){
        this.setState({ open: false });
    }
      
    handleChangeUser(e){
        this.setState({ username: e.target.value });
    }
    
    handleChangePassword(e){
        this.setState({ password: e.target.value });
    }

    login(e) {
        e.preventDefault();
        MeetupActions.loadSession(this.state.username, this.state.password);
        return false;
    }
    
    handleMenu(event){
        this.setState({ anchorEl: event.currentTarget });
    }
    
    handleCloseMenu(){
        this.setState({ anchorEl: null });
    }

  render() {
    const { open, username, password, anchorEl } = this.state;
    const menuOpen = Boolean(anchorEl);
    
    return (
        <div>
            {!this.props.sessionData.token ? (
                <div>
                    <Button size="large" color="inherit" onClick={this.handleClickOpen}>Login</Button>
                    <Dialog
                      open={open}
                      onClose={this.handleClose}
                      aria-labelledby="form-dialog-title"
                      >
                        <DialogTitle id="form-dialog-title">Login</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                            Login to access the list of events and be able to RSVP.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Username"
                                type="text"
                                onChange={this.handleChangeUser}
                                value={username}
                            />
                            <br/>
                            <TextField
                                margin="dense"
                                id="password"
                                label="Password"
                                type="password"
                                onChange={this.handleChangePassword}
                                value={password}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.login} color="primary">
                                Login
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            ) : (
                <div>
                    <IconButton
                      aria-owns={menuOpen ? 'menu-appbar' : null}
                      aria-haspopup="true"
                      onClick={this.handleMenu}
                      color="inherit"
                    >
                        
                        <Avatar>{this.props.sessionData.user_nicename.substring(0,2).toUpperCase()}</Avatar>
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
                      open={menuOpen}
                      onClose={this.handleCloseMenu}
                    >
                        <MenuItem onClick={this.handleCloseMenu}>Profile</MenuItem>
                    </Menu>
                </div>
            )}
        </div>
    );
  }
}
Login.propTypes = {
  sessionData: PropTypes.object
};