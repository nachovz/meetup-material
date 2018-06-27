import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = theme => ({
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
    color: theme.palette.primary.light,
    textDecoration: "none"
  }
});

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
        
        return(
            <div className={classes.root}>
                <AppBar position="static" className={classes.navBar} >
                    <Toolbar>
                        <Link className={classes.text} to={"/"}>
                            <img
                                src="http://assets.breatheco.de/apis/img/images.php?blob&random&cat=logo&tags=4geeks,white,small"
                                width="100"
                            />
                        </Link>
                        
                    </Toolbar>
                </AppBar>
            </div>
            );
    }
}
Navbar.propTypes = {
  sessionData: PropTypes.object,
  currentView: PropTypes.string,
  classes: PropTypes.object.isRequired,
  loginEnabled: PropTypes.bool
};
export default withStyles(styles)(Navbar);