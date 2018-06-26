import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import moment from "moment";

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import CustomChip from './CustomChip.jsx';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingLeft: theme.spacing.unit*3,
    paddingRight: theme.spacing.unit*3,
    paddingTop: theme.spacing.unit*3,
    paddingBottom: theme.spacing.unit*3,
    marginTop: theme.spacing.unit * 3
  }),
  root2: {
      display: "flex",
      flexWrap: "wrap"
  },
  fixItem: {
    flex: '2 1 auto',
    minWidth: "67%",
    flexWrap: "wrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 20,
    height: 20
  },
  button: {
    margin: theme.spacing.unit
  },
  buttoners:{
    justifyContent: 'center',
    alignSelf: 'center'
  },
  chip: {
    marginLeft: 0,
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.primary.contrastText
  },
  chipAvatar: {
    backgroundColor: theme.palette.primary.contrastText
  },
  clickable: {
    marginBottom:5,
    boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
  }
});

class EventPaperSheet extends React.Component {
    
    constructor(props){
        super(props);
    }
    
    daysLeftCalc(event_date){
        let now = moment();
        event_date = moment(event_date).isValid() ? moment(event_date) : now;
        let final = event_date.diff(now, 'days');
        return final > 0 && final < 20 ? final+" days left" : "";
        
    }
    
    render(){
        const { classes } = this.props;
        const event = this.props.event;
        
        let eventDay, eventTime = eventDay = "TBA";
        if( event.event_date !== null ){
            eventDay = event.event_date.replace(/\s/g, 'T');
            eventDay = eventDay.replace(/-/g, '').replace(/:/g, '');
            eventDay = moment(eventDay);
            eventTime = eventDay.format("h:mm a").toString();
            eventDay = eventDay.format("MMMM D YYYY").toString();
        }
        
        return ( 
            <Paper elevation={4} className={classNames(classes.root, classes.root2)} style={{justifyContent: "space-between"}}>
                
                <div className={classes.fixItem}>
                    <Typography variant="headline" component="h2" style={{display: "inline-block"}}>
                        {event.title}
                    </Typography>
                    <br/>
                    <div className={classes.root2} style={{alignItems: "center", justifyContent:"space-between"}} >
                        <Typography variant="subheading" >
                            <small>Date:</small> {eventDay} <sup><em><small className={classes.avatarChip}>{this.daysLeftCalc(eventDay)}</small></em></sup>
                            <br/>
                            <small>Time:</small> {eventTime}
                        </Typography>
                        <CustomChip
                            classes={classes} 
                            clickable={true}
                            onClick={() => window.open("https://maps.google.com/maps?q="+event.address , "_blank")}
                            icon={
                                <Avatar
                                    src={event.logo_url}
                                />
                            }
                            label={event.address}
                          />
                    </div>
                </div>
                <div className={classNames(classes.root2, classes.buttoners)} style={{flex: '1 1 auto'}}>
                    <Typography style={{padding:20}}>
                        {
                          event.description && event.description.substring(0, event.description.indexOf('.',80)+1)
                          
                        }
                    </Typography>
                    <a href={event.url} style={{textDecoration: 'none'}}>
                        <Button variant="raised" color="primary" className={classes.button}>
                          RSVP
                        </Button>
                    </a>
                    <Link to={"/event/"+event.id} style={{textDecoration: 'none'}}>
                        <Button variant="flat" color="secondary" className={classes.button}>
                          Read More
                        </Button>
                    </Link>
                </div>
            </Paper>
      );
    }
}

EventPaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
  event: PropTypes.object.isRequired
};

export default withStyles(styles)(EventPaperSheet);