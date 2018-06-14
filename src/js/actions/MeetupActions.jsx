import Flux from "@4geeksacademy/react-flux-dash";
import ReactGA from 'react-ga';
import {UserContext} from '../component/user-context';

class MeetupActions extends Flux.Action{
  
  /*loadApiMeetups(){
        //fetch('https://assets.breatheco.de/apis/meetup/meetups')
        fetch('https://wordpress-breathecode-cli-nachovz.c9users.io/wp-json/sample_api/v1/meetups')
            .then( (response) => {
              if (!response.ok) {
                  throw new Error(response.statusText);
              }
                return response.json();
                
            }).then( (data) => {
                //if (typeof(data.code) !== "undefined" && data.code !== 200) {
                if (typeof(data.code) !== "undefined" ) {
                  throw new Error(data.message);
                }
                this.dispatch('MeetupStore.loadDataMeetups', data);  
            }).catch(error => {
              //console.error('MeetupActions:loadApiMeetups:ERROR', error);
              this.dispatch('MeetupStore.error', error);
            });
    }
    
    loadApiEvents(token){
        fetch('https://wordpress-breathecode-cli-nachovz.c9users.io/wp-json/sample_api/v1/events',
        {
          headers: new Headers({
            'Authorization': 'Bearer '+token
          })
        })
            .then( (response) => {
              if (response.status !== 200) {
                if(response.status === 403){
                  this.dispatch('MeetupStore.endSession');
                }
                  throw new Error(response.statusText);
              }
                return response.json();
                
            }).then( (data) => {
                //if (typeof(data.code) !== "undefined" && data.code !== 200) {
                if (typeof(data.code) !== "undefined" ) {
                  throw new Error(data.message);
                }
                this.dispatch('MeetupStore.loadDataEvents', data);  
            }).catch(error => {
              //console.error('MeetupActions:loadApiMeetups:ERROR', error);
              this.dispatch('MeetupStore.error', error);
            });
    }
  
  rsvpEvent(id, userId, answer, token){
    
    ReactGA.event({
      category: 'User',
      action: 'RSVP',
      value: answer === "yes" ? 1 : 0
    });
    
    var data = {
      user: userId,
      answer: answer
    };
    
    fetch('https://wordpress-breathecode-cli-nachovz.c9users.io/wp-json/sample_api/v1/events/rsvp/'+id, 
    {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token
        })
    })
    .then(data => {
      if (data.status !== 200 ) {
        if(data.status === 403){
          this.dispatch('MeetupStore.endSession');
        }
        
        throw new Error(data);
      }
      this.loadApiEvents(token);
    });
  }*/
  
  loadApiEvents(){
      fetch('https://assets.breatheco.de/apis/event/all')
          .then( (response) => {
            if (response.status !== 200) {
                throw new Error(response.statusText);
            }
              return response.json();
              
          }).then( (data) => {
              
              if (!Array.isArray(data)) {
                throw new Error(data);//TO-DO: Documentation on error cases
              }
              this.dispatch('MeetupStore.loadDataEvents', data);  
          }).catch(error => {
            this.dispatch('MeetupStore.error', error);
          });
  }
  
  loadSession(username, password){
    //REST API AUTH
    var data = {
        "username":username, 
        "password":password
      };
      
    fetch('https://wordpress-breathecode-cli-nachovz.c9users.io/wp-json/jwt-auth/v1/token',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
        })
    })
    .then( function(answer) {
        
        return answer.json();
        
    }).then( (data) => {
        
        if (typeof(data.token) === "undefined" ) throw new Error(data.message);
        
        this.dispatch('MeetupStore.setSession', data); 
        this.loadApiEvents(data.token);
        ReactGA.set({ userId: data.user_nicename });
    }).catch(error => {
      this.dispatch('MeetupStore.error', error);
    });
  }
  
}

var meetupActions = new MeetupActions();
export default meetupActions;