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


const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
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
    maxWidth: 495,
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
    margin: theme.spacing.unit,
    marginLeft: 0,
    backgroundColor: theme.palette.primary.contrastText
  },
  avatarChip: {
    color: theme.palette.secondary.main
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
                    <Typography variant="subheading" >
                        <small>Date:</small> {eventDay} <sup><em><small className={classes.avatarChip}>{this.daysLeftCalc(eventDay)}</small></em></sup>
                        <br/>
                        <small>Time:</small> {eventTime}
                    </Typography>
                    <Chip
                        avatar={
                            <Avatar
                                src={event.logo_url}
                            />
                        }
                        label={event.address}
                        className={classes.chip}
                      />
                </div>
                <div className={classNames(classes.root2, classes.buttoners)} style={{flex: '1 1 auto'}}>
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