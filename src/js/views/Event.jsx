import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import Moment from "moment";
import ReactGA from 'react-ga';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GroupIcon from '@material-ui/icons/Group';
import ShareIcon from '@material-ui/icons/Share';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DirectionsIcon from '@material-ui/icons/Directions';
import LabelIcon from '@material-ui/icons/Label';
import CheckIcon from '@material-ui/icons/Check';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';

import Navbar from '../component/Navbar.jsx';
import meetupStore from '../stores/MeetupStore.jsx';

const styles = theme => ({
  card: {
    maxWidth: 1000,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 100
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
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary.dark
  },
  chipAvatar: {
    backgroundColor: theme.palette.primary.contrastText
  },
  clickable: {
    boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

class Event extends Flux.View {
    
    constructor(props){
        super(props);
        
        this.state = {
            event: meetupStore.getEvent(props.match.params.theid),
            session: {},
            expanded: false
        };
        
        this.bindStore(meetupStore, function(){
            // retreive any store data
            this.setState({
                event: meetupStore.getEvent(this.props.match.params.theid),
                session: meetupStore.getSession()
            });
        });
    }
    
    componentWillMount(){
        
        this.setState({
            event: meetupStore.getEvent(this.props.match.params.theid),
            session: meetupStore.getSession()
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
        
        let descSummary, descRest = descSummary = "";
        if( event.description ){
            descSummary = event.description.substring(0, event.description.indexOf('.',80)+1);
            descRest = event.description.substring(event.description.indexOf('.',80)+1);
        }

    return (
        <div>
            <Navbar sessionData={this.state.session} />
            <Card className={classes.card}>
                <CardHeader
                avatar={
                    <Avatar
                        aria-label="Recipe"
                        src={event.logo_url}
                        className={classNames(classes.avatar, classes.bigAvatar)}
                    />
                }
                title={event.title}
                subheader={eventDay+" "+eventTime}
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
                    <Typography component="p">
                        {descSummary}
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>

                    <IconButton
                    className={classnames(classes.expand, {
                    [classes.expandOpen]: this.state.expanded
                    })}
                    onClick={() => this.setState({ expanded: !this.state.expanded })}
                    aria-expanded={this.state.expanded}
                    aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography component="p">
                            {descRest}
                        </Typography>
                    </CardContent>
                </Collapse>
                <Button 
                    variant="fab" 
                    color="primary" 
                    className={classNames(classes.button, classes.fab)} 
                    onClick={() => window.open(event.url,"_blank")}>
                    <Tooltip open={true} title="RSVP ➤" placement="left">
                        <CheckIcon/>
                    </Tooltip>
                </Button>
            </Card>
        </div>
        );
    }
}
export default withStyles(styles,{ withTheme: true })(Event);

function CustomChip(props){
    return  props.tooltipTitle ? (
        <Tooltip id="tooltip-icon" title={props.tooltipTitle}>
            <Chip
                avatar={
                    <Avatar
                        className={props.classes.chipAvatar}
                    >
                        {props.icon}
                    </Avatar>
                }
                label={props.label}
                className={classNames(props.classes.margin, props.classes.chip, (props.clickable ? props.classes.clickable: '') )}
                onClick={props.onClick}
                clickable={props.clickable}
            /> 
        </Tooltip>
        ) : (
            <Chip
                avatar={
                    <Avatar
                        className={props.classes.chipAvatar}
                    >
                        {props.icon}
                    </Avatar>
                }
                label={props.label}
                className={classNames(props.classes.margin, props.classes.chip, (props.clickable ? props.classes.clickable: '') )}
                onClick={props.onClick}
                clickable={props.clickable}
            /> 
        );
}
CustomChip.propTypes = {
  classes: PropTypes.object,
  label: PropTypes.string,
  onClick: PropTypes.func,
  clickable: PropTypes.bool,
  tooltipTitle: PropTypes.string,
  icon: PropTypes.element
};