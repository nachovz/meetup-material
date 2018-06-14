import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

export default class Dashboard extends Flux.View {
    
    constructor(){
        super();
        
        this.state = {
            events: meetupStore.getAllEvents(),
            session: meetupStore.getSession(),
            filter: ''
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
    
    componentWillMount(){
    }
    
    handleStoreChanges(){
    }
    
    componentWillUnmount(){
    }
    
    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }
    
    render(){
        //GA Pageview
        ReactGA.pageview(window.location.pathname + window.location.search);
        
        // Render the Calendar
        var today = new Date();
        var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
        
        var allEvents = this.state.events.length < 1 ? 
            <PaperSheet text="No Events"/>
            : this.state.events.map((event) =>{
                
                if(this.state.filter === event.type || this.state.filter === '' || this.state.filter === 'All') return(
                    <EventPaperSheet key={event.id} event={event}/>
                ); 
        });
        
        return(
            <div style={{flexGrow:1}}>
                <Navbar currentView="home" />
                <Grid container spacing={8} style={{justifyContent: 'center'}} >
                    <Grid item xs md={8} >
                        <Paper style={{padding:16, display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <Typography component="h1" variant="headline">
                                All Events
                            </Typography>
                            <form autoComplete="off">
                                <FormControl style={{marginTop: 0,minWidth: 120}}>
                                    <InputLabel htmlFor="filter-simple">Filter</InputLabel>
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
                        </Paper>
                        {allEvents.find(element=> element) ? allEvents : <PaperSheet text="No Events"/> }
                    </Grid>
                </Grid>
            </div>
        );
    }
}