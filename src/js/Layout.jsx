import React from 'react';
import Flux from "@4geeksacademy/react-flux-dash";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./views/ScrollToTop.jsx";
import Dashboard from "./views/Dashboard.jsx";
//import Event from "./views/Event.jsx";
import Navigationbar from './component/BootstrapNavbar.jsx';
import Loadable from 'react-loadable';
import CustomCircularProgress from './component/CustomCircularProgress.jsx';

import meetupActions from './actions/MeetupActions.jsx';
import meetupStore from './stores/MeetupStore.jsx';

const EventComponent = Loadable({
  loader: () => import("./views/Event.jsx"),
  loading: CustomCircularProgress
});

export default class Layout extends Flux.View {
  
  constructor(){
    super();
    meetupActions.loadApiEvents();
  }
  
  render() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <ScrollToTop>
                    <Navigationbar />
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route
                            path="/event/:theid"
                            component={EventComponent}
                          />
                        <Route render={() => <h1>Not found!</h1>} />
                    </Switch>
                </ScrollToTop>
            </BrowserRouter>
        </React.Fragment>
    );
  }
}
