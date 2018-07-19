import Flux from "@4geeksacademy/react-flux-dash";

class MeetupActions extends Flux.Action{
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
          
      fetch('https://www.4geeksacademy.co/wp-json/4g/v1/courses')
          .then( (response) => {
            if (response.status !== 200) {
                throw new Error(response.statusText);
            }
              return response.json();
              
          }).then( (data) => {
              
              if (!Array.isArray(data)) {
                throw new Error(data);//TO-DO: Documentation on error cases
              }
              
              this.dispatch('MeetupStore.loadDataCourses', data);  
          }).catch(error => {
            this.dispatch('MeetupStore.error', error);
      });
    }
}

var meetupActions = new MeetupActions();
export default meetupActions;