import React from 'react';
import Flux from "@4geeksacademy/react-flux-dash";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./views/ScrollToTop.jsx";
import Dashboard from "./views/Dashboard.jsx";
import Meetup from "./views/Meetup.jsx";
import Event from "./views/Event.jsx";
import Login from "./views/Login.jsx";

import meetupActions from './actions/MeetupActions.jsx';
import meetupStore from './stores/MeetupStore.jsx';
import {UserContext} from './component/user-context';


export default class Layout extends Flux.View {
  
  constructor(){
    super();
    //meetupActions.loadApiMeetups();
    //meetupActions.loadApiEvents(meetupStore.getToken());
    meetupActions.loadApiEvents();
    //meetupActions.loadSession();
    this.state = {
      session: {
        user_nicename: "test",
        token: ""
      }
    };
    
    this.bindStore(meetupStore, function(){
        // retreive events data
        this.setState({
            session: meetupStore.getSession()
        });
    });
  }
  
  render() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <ScrollToTop>
                    <Switch>
                        <UserContext.Provider value={this.state.session}>
                            <Route exact path="/" component={Dashboard} />
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/event/:theid" component={Event} />
                            <Route path="/meetup/:theid" component={Meetup} />
                            <Route path="/login" component={Login} />
                        </UserContext.Provider>
                        <Route render={() => <h1>Not found!</h1>} />
                    </Switch>
                </ScrollToTop>
            </BrowserRouter>
        </React.Fragment>
    );
  }
}
