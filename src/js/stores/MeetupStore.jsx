import Flux from "@4geeksacademy/react-flux-dash";

class MeetupStore extends Flux.Store{
    
    constructor(){
        super();
        
        this.state = {
            "events":   [
                            {
                                description: "4Geeks Nights - Learn to Code for Free Coding is no longer a dream. We are closing the gap and bringing coding to your life. A master platform, full of exercises and content, for free. To begin, we will give you free access to our Coding Introduction Program, where you will find everything you need to start your training as a software developer. HTML, CSS, Bootstrap, JavaScript and more. This is not only reading, videos, and tutorials, but tons of exercises and projects to work with.We have five -probably more- GREAT reasons why you should be in our 4Geeks Nights event on June 28th.- You will get FREE access to the Coding Intro Program and platform. Learn to Code has never been easy and better;- You will get free mentorship hours every week;- Our Career Support program speaks for itself. You will meet our Alumni; one of them will talk about his projects and experience at 4Geeks!- You will have fun while meeting our entire team & office: Founders, instructors, partners and classroom spaces. Have a drink with us!- You will get the details about our Software Program. Full Stack + Part-time + Premium Education + Best pricing options'- Play Kill the Bug and earn a prize!Every 2 months we are launching new programs and you can be part of the next 4Geeks Alumni as a Full-Stack Software Developer. Get ready to change your life.Come. Have fun. Learn to Code. Let's celebrate together our way of making Coding a possibility to your career.A little bit about our program:Become a software developer in 16 weeks, with a part-time/blended methodology and with pricing options starting at $140p/mo. You will get more than 320 hours of training, in a gamified program designed to be 100% hands-on.Our Syllabus is based on Javascript, React JS, Python, Django, Mongo DB, AJAX, API, among other exciting technologies. You will be trained in the most wanted technologies in Miami; just what companies are looking for!NOTE: Our programs are up to 14 students. Few spots available per cohort. Just click here if you want to meet with us. The program will start on August, 13th. This is your chance to understand how Coding will change your professional life!",
                                title: "4Geeks Nights: INFO+CODING+GAMES+DRINKS",
                                url: "https://www.eventbrite.com/e/4geeks-nights-infocodinggamesdrinks-tickets-46847266435",
                                capacity: "100",
                                logo_url: "https://pbs.twimg.com/profile_images/930433054371434496/v8GNrusZ_400x400.jpg",
                                event_date: "2018-06-28 18:00:00",
                                type: "intro_to_coding",
                                address: "66 West Flagler Street #900, Miami, FL 33130",
                                location_slug: "downtown-miami",
                                lang: "en",
                                city_slug: "mia",
                                banner_url: "http://placehold.it/800x400",
                                invite_only: "0",
                                created_at: "2018-06-19 16:18:50",
                                id: "8"
                            },
                            {
                                description: "4Geeks Nights - Learn to Code for Free Coding is no longer a dream. We are closing the gap and bringing coding to your life. A master platform, full of exercises and content, for free. To begin, we will give you free access to our Coding Introduction Program, where you will find everything you need to start your training as a software developer. HTML, CSS, Bootstrap, JavaScript and more. This is not only reading, videos, and tutorials, but tons of exercises and projects to work with.We have five -probably more- GREAT reasons why you should be in our 4Geeks Nights event on June 28th.- You will get FREE access to the Coding Intro Program and platform. Learn to Code has never been easy and better;- You will get free mentorship hours every week;- Our Career Support program speaks for itself. You will meet our Alumni; one of them will talk about his projects and experience at 4Geeks!- You will have fun while meeting our entire team & office: Founders, instructors, partners and classroom spaces. Have a drink with us!- You will get the details about our Software Program. Full Stack + Part-time + Premium Education + Best pricing options'- Play Kill the Bug and earn a prize!Every 2 months we are launching new programs and you can be part of the next 4Geeks Alumni as a Full-Stack Software Developer. Get ready to change your life.Come. Have fun. Learn to Code. Let's celebrate together our way of making Coding a possibility to your career.A little bit about our program:Become a software developer in 16 weeks, with a part-time/blended methodology and with pricing options starting at $140p/mo. You will get more than 320 hours of training, in a gamified program designed to be 100% hands-on.Our Syllabus is based on Javascript, React JS, Python, Django, Mongo DB, AJAX, API, among other exciting technologies. You will be trained in the most wanted technologies in Miami; just what companies are looking for!NOTE: Our programs are up to 14 students. Few spots available per cohort. Just click here if you want to meet with us. The program will start on August, 13th. This is your chance to understand how Coding will change your professional life!",
                                title: "4Geeks Nights: INFO+CODING+GAMES+DRINKS",
                                url: "https://www.eventbrite.com/e/4geeks-nights-infocodinggamesdrinks-tickets-46847266435",
                                capacity: "100",
                                logo_url: "https://pbs.twimg.com/profile_images/930433054371434496/v8GNrusZ_400x400.jpg",
                                event_date: "2018-06-28 18:00:00",
                                type: "coding_weekend",
                                address: "66 West Flagler Street #900, Miami, FL 33130",
                                location_slug: "",
                                lang: "en",
                                city_slug: "mia",
                                banner_url: "http://placehold.it/800x400",
                                invite_only: "0",
                                created_at: "2018-06-19 16:18:50",
                                id: "1"
                            },
                            {
                                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                                "title": "Intro To Coding ",
                                "url": "https://www.4geekscademy.co",
                                "capacity": "100",
                                "logo_url": "https://upload.wikimedia.org/wikipedia/en/8/84/MiamiDadeCollegeLogo.png",
                                "invite_only": "0",
                                "created_at": "2018-06-13 11:27:04",
                                "id": "6",
                                "banner_url": null,
                                "event_date": "2018-08-20 20:30:00",
                                "type": "intro_to_coding",
                                "city_slug": "mia",
                                "address": "627 SW 27th Ave, Miami, FL 33135"
                            },
                            {
                            "description": "4Geeks Nights - Learn to Code for Free Coding is no longer a dream. We are closing the gap and bringing coding to your life. A master platform, full of exercises and content, for free. To begin, we will give you free access to our Coding Introduction Program, where you will find everything you need to start your training as a software developer. HTML, CSS, Bootstrap, JavaScript and more. This is not only reading, videos, and tutorials, but tons of exercises and projects to work with.We have five -probably more- GREAT reasons why you should be in our 4Geeks Nights event on June 28th.- You will get FREE access to the Coding Intro Program and platform. Learn to Code has never been easy and better;- You will get free mentorship hours every week;- Our Career Support program speaks for itself. You will meet our Alumni; one of them will talk about his projects and experience at 4Geeks!- You will have fun while meeting our entire team & office: Founders, instructors, partners and classroom spaces. Have a drink with us!- You will get the details about our Software Program.",
                            "title": "4Geeks Nights: INFO+CODING+GAMES+DRINKS",
                            "url": "https://www.eventbrite.com/e/4geeks-nights-infocodinggamesdrinks-tickets-46847266435",
                            "capacity": "100",
                            "logo_url": "https://pbs.twimg.com/profile_images/930433054371434496/v8GNrusZ_400x400.jpg",
                            "invite_only": "0",
                            "created_at": "2018-06-14 16:54:50",
                            "id": "7",
                            "banner_url": null,
                            "event_date": "2018-06-28 18:00:00",
                            "type": "intro_to_coding",
                            "city_slug": "mia",
                            "address": "66 West Flagler Street #900, Miami, FL 33130"
                            },
                            {
                            "description": "Description for the event",
                            "title": "asd",
                            "url": "http://www.asdads.com",
                            "capacity": "200",
                            "logo_url": "http://www.asdads.com",
                            "invite_only": "1",
                            "created_at": "2018-06-12 14:58:52",
                            "id": "4",
                            "banner_url": null,
                            "event_date": "2017-08-20 20:30:00",
                            "type": "coding_weekend",
                            "city_slug": "ccs",
                            "address": null
                            },
                            {
                            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                            "title": "This is a very long Title of an Event",
                            "url": "https://www.4geekscademy.co",
                            "capacity": "100",
                            "logo_url": "https://www.4geeksacademy.co/wp-content/themes/the-fastest/assets/img/icon-logo.png",
                            "invite_only": "1",
                            "created_at": "2018-06-13 11:02:19",
                            "id": "5",
                            "banner_url": null,
                            "event_date": "2017-08-20 20:30:00",
                            "type": "coding_weekend",
                            "city_slug": "ccs",
                            "address": "66 W Flagler St #900, Miami, FL 33130"
                            },
                            {
                            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                            "title": "Intro To Coding",
                            "url": "https://www.eventbrite.com/e/learn-to-code-at-miami-dade-college-fall-term-information-session-tickets-46294138013?aff=ebdssbdestsearch",
                            "capacity": "100",
                            "logo_url": "https://en.wikipedia.org/wiki/Miami_Dade_College",
                            "invite_only": "0",
                            "created_at": "2018-06-07 11:10:44",
                            "id": "12",
                            "banner_url": null,
                            "event_date": null,
                            "type": "workshop",
                            "city_slug": "miami",
                            "address": null
                            },
                            {
                            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                            "title": "Coding Weekends",
                            "url": "https://www.4geekscademy.co",
                            "capacity": "100",
                            "logo_url": "https://www.4geeksacademy.co/wp-content/themes/the-fastest/assets/img/icon-logo.png",
                            "invite_only": "0",
                            "created_at": "2018-06-07 11:15:26",
                            "id": "2",
                            "banner_url": null,
                            "event_date": null,
                            "type": "workshop",
                            "city_slug": "miami",
                            "address": null
                            },
                            {
                            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                            "title": "Coding Weekends",
                            "url": "https://www.4geekscademy.co",
                            "capacity": "100",
                            "logo_url": "https://www.4geeksacademy.co/wp-content/themes/the-fastest/assets/img/icon-logo.png",
                            "invite_only": "0",
                            "created_at": "2018-06-07 11:47:47",
                            "id": "3",
                            "banner_url": null,
                            "event_date": null,
                            "type": "workshop",
                            "city_slug": "miami",
                            "address": null
                            }
                        ],
            "session":{},
            "locations": [
                            {
                                id: 1,
                                slug: "impact-hub",
                                name: "Impact Hub",
                                country: "0",
                                address: "0",
                                created_at: "2017-08-09 23:23:31",
                                updated_at: "2017-08-09 23:23:31"
                                },
                                {
                                id: 2,
                                slug: "maracaibo",
                                name: "Maracaibo",
                                country: "0",
                                address: "0",
                                created_at: "2017-08-09 23:23:31",
                                updated_at: "2017-09-26 17:11:28"
                                },
                                {
                                id: 3,
                                slug: "el-nacional",
                                name: "El Nacional",
                                country: "0",
                                address: "0",
                                created_at: "2017-08-09 23:23:32",
                                updated_at: "2017-08-09 23:23:32"
                                },
                                {
                                id: 4,
                                slug: "mdc",
                                name: "MDC",
                                country: "0",
                                address: "0",
                                created_at: "2017-08-09 23:23:33",
                                updated_at: "2017-08-09 23:23:33"
                                },
                                {
                                id: 5,
                                slug: "black-belt-coding",
                                name: "Black Belt Coding",
                                country: "0",
                                address: "0",
                                created_at: "2017-08-09 23:28:52",
                                updated_at: "2017-08-09 23:28:52"
                                },
                                {
                                id: 6,
                                slug: "el-rosal",
                                name: "El Rosal",
                                country: "0",
                                address: "0",
                                created_at: "2017-08-09 23:28:52",
                                updated_at: "2017-09-26 17:11:38"
                                },
                                {
                                id: 8,
                                slug: "downtown-miami",
                                name: "Downtown Miami",
                                country: "0",
                                address: "0",
                                created_at: "2017-09-17 13:03:52",
                                updated_at: "2017-09-17 13:03:52"
                                }
                            ]
        };
    }
    
    _loadDataEvents(data){
        let tempState = this.state;
        tempState.events = data;
        this.setStoreState(tempState).emit();
    }
    
    getAllEvents(){
        return this.state.events;
    }
    
    getEvent(incomingId){

        return this.state.events.find( (theEvent) => {
            return incomingId === theEvent.id;
        });
    }
    
    _error(e){
        const newState = { "error": e.toString() };
        this.setStoreState(newState).emit('ERROR');
    }
    
    getError(){
        return this.state.error;
    }
    
    _setSession(userInfo){
        let tempState = this.state;
        tempState.session = userInfo;
        
        this.setStoreState(tempState).emit();
    }
    
    getSession(){
        return this.state.session;
    }
    
    _rsvpSuccessful(args){
        let tempState = this.state;
        tempState.events.map( (anEvent) => {
            if(anEvent.ID === parseInt(args[0]) ){
                anEvent.meta_keys._rsvpYes.push(args[1]);
            }
        });

        this.setStoreState(tempState).emit();
    }
    
    _endSession(){
        let tempState = this.state;
        tempState.session = {};
        this.setStoreState(tempState).emit();
    }
    
    getLocations(){
        return this.state.locations;
    }
}

var meetupStore = new MeetupStore();
export default meetupStore;