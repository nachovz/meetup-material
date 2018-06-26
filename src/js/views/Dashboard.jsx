import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import 'react-infinite-calendar/styles.css';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';

import ReactGA from 'react-ga';
import Navbar from '../component/Navbar.jsx';
import PaperSheet from '../component/PaperSheet.jsx';
import EventPaperSheet from '../component/EventPaperSheet.jsx';
//import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import meetupStore from '../stores/MeetupStore.jsx';
import meetupActions from '../actions/MeetupActions.jsx';

import moment from "moment";

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
  }/*,
  chip: {
    margin: theme.spacing.unit,
    marginLeft: 0,
    backgroundColor: theme.palette.primary.contrastText
  },
  avatarChip: {
    color: theme.palette.secondary.main
  }*/,
  heroUnit:{
      display: "flex", 
      justifyContent: "center",
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      alignItems: "baseline",
      padding: "50px",
      flexWrap: "wrap",
      textAlign: "center"
  },
  inlineForm:{
      margin: "0 10px",
      minWidth: 120,
      color: theme.palette.primary.contrastText
  },
  primaryTextColor:{
      color: theme.palette.primary.contrastText
  }
  
});

class Dashboard extends Flux.View {
    
    constructor(){
        super();
        
        this.state = {
            events: meetupStore.getAllEvents(),
            session: meetupStore.getSession(),
            locations: meetupStore.getLocations(),
            filter: 'All',
            locationFilter: 'All',
            languageFilter: 'All'
        };
        
        this.bindStore(meetupStore, function(){
            this.setState({
                events: meetupStore.getAllEvents(),
                session: meetupStore.getSession()
            });
        });
        this.handleChange = this.handleChange.bind(this);
        /*this.bindStore(meetupStore, 'CONTENT_LOADED', (data) => {
            console.log("Dashboard:CONTENT_LOADED", data); 
            const events = meetupStore.getAllEvents();
            this.setState({events:events}); 
        });
        this.bindStore(meetupStore, 'ERROR', function(data){
            console.log("HOME:ERROR", data);    
            //alert(meetupStore.getError());
            
        });*/
    }
    
    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }
    
    render(){
        const { classes } = this.props;
        //GA Pageview
        ReactGA.pageview(window.location.pathname + window.location.search);
        
        // Render the Calendar
        var today = new Date();
        var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
        
        var allEvents = this.state.events.length < 1 ? 
            <PaperSheet text="No Events"/>
            : this.state.events.map((event) =>{
                
                if( (this.state.filter === event.type || this.state.filter === '' || this.state.filter === 'All') 
                    && 
                    (this.state.locationFilter === event.location_slug || this.state.locationFilter === '' || this.state.locationFilter === 'All')
                    &&
                    (this.state.languageFilter === event.lang || this.state.languageFilter === '' || this.state.languageFilter === 'All')
                ) return(
                    <EventPaperSheet key={event.id} event={event}/>
                );
        });
        
        return(
            <div style={{flexGrow:1}}>
                <Navbar currentView="home" />
                <div className={classes.heroUnit}>
                    <Typography component="h1" variant="display1" color="inherit" className={classes.heroText}>Select a location:  </Typography>
                    <form autoComplete="off">
                        <FormControl className={classes.inlineForm}>
                            <Select
                                value={this.state.locationFilter}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'locationFilter',
                                    id: 'location-simple'
                                }}
                                className={classes.primaryTextColor}
                                style={{border: "1px solid white", padding: "0 5px", fontSize:"2em"}}
                                >
                                <MenuItem value="All">
                                    <em>All</em>
                                </MenuItem>
                                {
                                    this.state.locations.map( (locat, index) => {
                                        return <MenuItem value={locat.slug} key={index}>{locat.name}</MenuItem>;
                                    })
                                }
                                
                            </Select>
                        </FormControl>
                    </form> 
                    <Typography component="h1" variant="display1" color="inherit" className={classes.heroText}>to discover our available courses, workshops and events.</Typography>
                    
                </div>
                <Grid container spacing={8} style={{justifyContent: 'center'}} >
                    <Grid item xs md={8} >
                        <AppBar style={{padding:16, display: "flex", flexDirection: "row", flexWrap: "wrap", top: 54, zIndex: 10}} position="sticky" color="default">
                            <div style={{display: "flex", flexWrap: "no-wrap", alignItems: "baseline"}}>
                                <Typography component="h1" variant="headline" style={{fontSize:"1rem"}}>
                                    Showing 
                                </Typography>
                                <form autoComplete="off">
                                    <FormControl className={classes.inlineForm} style={{fontSize:"0.50rem", minWidth:"80px"}}>
                                        <InputLabel htmlFor="filter-simple">Type</InputLabel>
                                        <Select
                                            value={this.state.filter}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'filter',
                                                id: 'filter-simple'
                                            }}
                                            >
                                            <MenuItem value="All">
                                                <em>All</em>
                                            </MenuItem>
                                            <MenuItem value={'workshop'}>Workshop</MenuItem>
                                            <MenuItem value={'hackathon'}>Hackathon</MenuItem>
                                            <MenuItem value={'intro_to_coding'}>Intro to Coding</MenuItem>
                                            <MenuItem value={'coding_weekend'}>Coding Weekend</MenuItem>
                                            <MenuItem value={'4geeks_night'}>4Geeks Night</MenuItem>
                                            <MenuItem value={'other'}>Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </form>
                            </div>
                            <div style={{display: "flex", flexWrap: "no-wrap", alignItems: "baseline"}}>
                                <Typography component="h1" variant="headline" style={{fontSize:"1rem"}}>
                                    on  
                                </Typography>
                                <form autoComplete="off">
                                    <FormControl className={classes.inlineForm} style={{fontSize:"0.50rem" , minWidth:"80px"}}>
                                        <InputLabel htmlFor="language-simple">Languages</InputLabel>
                                        <Select
                                            value={this.state.languageFilter}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: 'languageFilter',
                                                id: 'language-simple'
                                            }}
                                            >
                                            <MenuItem value="All">
                                                <em>All</em>
                                            </MenuItem>
                                            <MenuItem value={'en'}>English</MenuItem>
                                            <MenuItem value={'es'}>Spanish</MenuItem>
                                        </Select>
                                    </FormControl>
                                </form>
                            </div>
                        </AppBar>
                        {allEvents.find(element=> element) ? allEvents : <PaperSheet text="No Events"/> }
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Dashboard);