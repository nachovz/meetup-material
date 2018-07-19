import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import Moment from "moment";
import ReactGA from 'react-ga';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import GroupIcon from '@material-ui/icons/Group';
import ShareIcon from '@material-ui/icons/Share';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import DirectionsIcon from '@material-ui/icons/Directions';
import LabelIcon from '@material-ui/icons/Label';
import CheckIcon from '@material-ui/icons/Check';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import CircularProgress from '@material-ui/core/CircularProgress';
import CustomChip from '../component/CustomChip.jsx';
import ReactHtmlParser from 'react-html-parser';

import meetupStore from '../stores/MeetupStore.jsx';

const styles = theme => ({
  card: {
    maxWidth: 1000,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 100
  },
  cardHeader: {
      paddingBottom:0
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: 'auto'
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 60,
    height: 60
  },
  margin: {
    marginRight: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit
  },
  progress: {
    margin: theme.spacing.unit * 2
  },
  badgesContainer: {
    padding: theme.spacing.unit+"px 0",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    flexWrap: "wrap"
  },
  chip: {
    marginLeft: 0,
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.primary.contrastText,
    border: "1px solid "+theme.palette.primary.light
  },
  chipAvatar: {
    backgroundColor: theme.palette.primary.contrastText,
    height:30,
    width:30
  },
  clickable: {
    boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  },
  eventContent:{
      padding: theme.spacing.unit
  }
});

class Event extends Flux.View {
    
    constructor(props){
        super(props);
        
        this.state = {
            event: meetupStore.getEvent(props.match.params.theid)
        };
        
        this.bindStore(meetupStore, function(){
            // retreive any store data
            this.setState({
                event: meetupStore.getEvent(this.props.match.params.theid)
            });
        });
    }
    
    componentWillMount(){
        
        this.setState({
            event: meetupStore.getEvent(this.props.match.params.theid)
        });
    }
    
    render(){
        const { classes } = this.props;
        const event = this.state.event;
        ReactGA.pageview(window.location.pathname + window.location.search);
        
        if(!event){
            return(<CircularProgress className={classes.progress} color="secondary" />);
        }
        
        let eventDay, eventTime = eventDay = "TBA";
        if( event.event_date !== null ){
            eventDay = event.event_date.replace(/\s/g, 'T');
            eventDay = eventDay.replace(/-/g, '').replace(/:/g, '');
            eventDay = Moment(eventDay);
            eventTime = eventDay.format("h:mm a").toString();
            eventDay = eventDay.format("MMMM D").toString();
        }

    return (
        <Card className={classes.card}>
            <CardHeader
            avatar={
                <Avatar
                    aria-label="Recipe"
                    src={event.logo_url || "https://pbs.twimg.com/profile_images/930433054371434496/v8GNrusZ_400x400.jpg"}
                    className={classNames(classes.avatar, classes.bigAvatar)}
                />
            }
            title={event.title}
            subheader={eventDay+" "+eventTime}
            className={classes.cardHeader}
            />
            <CardContent>
                <div className={classes.badgesContainer}>
                    { event.address && (
                        <CustomChip 
                            classes={classes} 
                            label={event.address}
                            clickable={true}
                            onClick={() => window.open("https://maps.google.com/maps?q="+event.address , "_blank")}
                            icon={<DirectionsIcon />}
                        />
                        )
                    }
                    { event.capacity && (
                        <CustomChip 
                            classes={classes} 
                            label={event.capacity}
                            tooltipTitle="Capacity"
                            icon={<GroupIcon/>}
                        />
                        )
                    }
                    { event.type && (
                        <CustomChip 
                            classes={classes} 
                            label={event.type}
                            tooltipTitle="Type"
                            icon={<LabelIcon/>}
                        />
                        )
                    }
                    { event.city_slug && (
                        <CustomChip 
                            classes={classes} 
                            label={event.city_slug.toUpperCase()}
                            icon={<LocationCityIcon/>}
                        />
                        )
                    }
                    { event.invite_only === "1" && (
                        <CustomChip 
                            classes={classes} 
                            label="Invitation required"
                            tooltipTitle="Invitation Only"
                            icon={<AnnouncementIcon/>}
                        />
                        )
                    }
                </div>
                <Typography className={classes.eventContent}>
                    {ReactHtmlParser(event.description)}
                </Typography>
            </CardContent>
            <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="Share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
            <Button 
                variant="fab" 
                color="secondary" 
                className={classNames(classes.button, classes.fab)} 
                onClick={() => window.open(event.url,"_blank")}>
                <Tooltip open={true} title="RSVP ➤ " placement="left">
                    <CheckIcon/>
                </Tooltip>
            </Button>
        </Card>
        );
    }
}
export default withStyles(styles,{ withTheme: true })(Event);

