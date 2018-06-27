import Flux from "@4geeksacademy/react-flux-dash";
import Moment from 'moment';

class MeetupStore extends Flux.Store{
    
    constructor(){
        super();
        
        this.state = {
            "events":[
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
                                created_at: "2018-06-30 16:18:50",
                                id: "8",
                                finished: false
                            },
                            {
                                description: "4Geeks Nights - Learn to Code for Free Coding is no longer a dream. We are closing the gap and bringing coding to your life. A master platform, full of exercises and content, for free. To begin, we will give you free access to our Coding Introduction Program, where you will find everything you need to start your training as a software developer. HTML, CSS, Bootstrap, JavaScript and more. This is not only reading, videos, and tutorials, but tons of exercises and projects to work with.We have five -probably more- GREAT reasons why you should be in our 4Geeks Nights event on June 28th.- You will get FREE access to the Coding Intro Program and platform. Learn to Code has never been easy and better;- You will get free mentorship hours every week;- Our Career Support program speaks for itself. You will meet our Alumni; one of them will talk about his projects and experience at 4Geeks!- You will have fun while meeting our entire team & office: Founders, instructors, partners and classroom spaces. Have a drink with us!- You will get the details about our Software Program. Full Stack + Part-time + Premium Education + Best pricing options'- Play Kill the Bug and earn a prize!Every 2 months we are launching new programs and you can be part of the next 4Geeks Alumni as a Full-Stack Software Developer. Get ready to change your life.Come. Have fun. Learn to Code. Let's celebrate together our way of making Coding a possibility to your career.A little bit about our program:Become a software developer in 16 weeks, with a part-time/blended methodology and with pricing options starting at $140p/mo. You will get more than 320 hours of training, in a gamified program designed to be 100% hands-on.Our Syllabus is based on Javascript, React JS, Python, Django, Mongo DB, AJAX, API, among other exciting technologies. You will be trained in the most wanted technologies in Miami; just what companies are looking for!NOTE: Our programs are up to 14 students. Few spots available per cohort. Just click here if you want to meet with us. The program will start on August, 13th. This is your chance to understand how Coding will change your professional life!",
                                title: "4Geeks Nights: INFO + CODING + GAMES + DRINKS",
                                url: "https://www.eventbrite.com/e/4geeks-nights-infocodinggamesdrinks-tickets-46847266435",
                                capacity: "100",
                                logo_url: "https://pbs.twimg.com/profile_images/930433054371434496/v8GNrusZ_400x400.jpg",
                                event_date: "2018-06-28 18:00:00",
                                type: "coding_weekend",
                                address: "66 West Flagler Street #900, Miami, FL 33130",
                                location_slug: "",
                                lang: "es",
                                city_slug: "mia",
                                banner_url: "http://placehold.it/800x400",
                                invite_only: "0",
                                created_at: "2018-07-19 16:18:50",
                                id: "1",
                                finished: false
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
                                address: "627 SW 27th Ave, Miami, FL 33135",
                                lang: "es",
                                finished: false
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
                            lang: "es",
                            "address": "66 West Flagler Street #900, Miami, FL 33130",
                            finished: false
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
                            lang: "en",
                            "address": null,
                            finished: true
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
                            lang: "en",
                            "address": "66 W Flagler St #900, Miami, FL 33130",
                            finished: true
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
                            lang: "en",
                            "address": null,
                            finished: true
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
                            lang: "en",
                            "address": null,
                            finished: true
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
                            lang: "en",
                            "address": null,
                            finished: true
                            }
                        ],
            "session":{},
            "courses":[/*
                          {
                            "day": "28",
                            "month": "Jun",
                            "year": "2018",
                            "date": "June 28, 2018",
                            "bc_location_slug": "downtown-miami",
                            "bc_profile_slug": "coding-introduction",
                            "status": "not-started",
                            "time": 1530144000,
                            "language": "English",
                            "icon": "united-states",
                            "name": "Coding Introduction",
                            "slug": "coding-introduction",
                            "id": 2933,
                            "short_description": "Start learning to code today with our coding-introduction coding bootcamp - 75+ hours of HTML, CSS and JavaScript lessons. Get immersed in programming from day one and it is also the most effective way to get into today’s top coding bootcamps (including ours!).",
                            "hr_duration": "80",
                            "week_duration": "2",
                            "featured_image": "https://www.4geeksacademy.co/wp-content/uploads/2017/09/full-stack.jpg",
                            "location": "Miami Downtown, USA",
                            "location_id": 145
                          },
                          {
                            "day": "13",
                            "month": "Aug",
                            "year": "2018",
                            "date": "August 13, 2018",
                            "bc_location_slug": "downtown-miami",
                            "bc_profile_slug": "full-stack",
                            "status": "not-started",
                            "time": 1534118400,
                            "language": "English",
                            "icon": "united-states",
                            "name": "Full Stack Development",
                            "slug": "full-stack-development",
                            "id": 44,
                            "short_description": "A Premium Program designed to launch your career as a developer.  Learn the fundamentals of coding and build applications using HTML5, CSS3, React.js, and Python.  Integrate your application(s) with other platforms and create your own API. <br />\r\nThis course offers a dedicated career support team as well as: one-on-one coaching with our Senior mentors; networking opportunities; and introductions to potential employers.",
                            "hr_duration": "304",
                            "week_duration": "16",
                            "featured_image": "https://www.4geeksacademy.co/wp-content/uploads/2017/09/full-stack.jpg",
                            "location": "Miami Downtown, USA",
                            "location_id": 145
                          },
                          {
                            "day": "13",
                            "month": "Aug",
                            "year": "2018",
                            "date": "August 13, 2018",
                            "bc_location_slug": "impact-hub",
                            "bc_profile_slug": "full-stack",
                            "status": "not-started",
                            "time": 1534118400,
                            "language": "Español",
                            "icon": "spain",
                            "name": "Desarrollo Full-Stack",
                            "slug": "desarrollo-full-stack",
                            "id": 2635,
                            "short_description": "Un curso premium, diseñado para iniciar tu carrera como desarrollador y conseguir tu primer trabajo. Aprende a programar y construye applicaciones utilizando HTML5, CSS3, React.js y Python. Integrate con otras plataformas y desarrolla tu propia API.<br />\r\nEste curso ofrece un programa de asesoramiento profesional avanzado que te ayudara a conseguir un trabajo: Sesiones de coaching, construccion de tu perfil profesional, networking, intruduccion a posibles empleadores, etc.",
                            "hr_duration": "288",
                            "week_duration": "16",
                            "featured_image": "https://www.4geeksacademy.co/wp-content/uploads/2017/09/full-stack.jpg",
                            "location": "Impact Hub, CCS, Vzla",
                            "location_id": 2464
                          },
                          {
                            "day": "01",
                            "month": "Oct",
                            "year": "2018",
                            "date": "October 1, 2018",
                            "bc_location_slug": "maracaibo",
                            "bc_profile_slug": "full-stack",
                            "status": "not-started",
                            "time": 1538352000,
                            "language": "Español",
                            "icon": "spain",
                            "name": "Desarrollo Full-Stack",
                            "slug": "desarrollo-full-stack",
                            "id": 2635,
                            "short_description": "Un curso premium, diseñado para iniciar tu carrera como desarrollador y conseguir tu primer trabajo. Aprende a programar y construye applicaciones utilizando HTML5, CSS3, React.js y Python. Integrate con otras plataformas y desarrolla tu propia API.<br />\r\nEste curso ofrece un programa de asesoramiento profesional avanzado que te ayudara a conseguir un trabajo: Sesiones de coaching, construccion de tu perfil profesional, networking, intruduccion a posibles empleadores, etc.",
                            "hr_duration": "288",
                            "week_duration": "16",
                            "featured_image": "https://www.4geeksacademy.co/wp-content/uploads/2017/09/full-stack.jpg",
                            "location": "Maracaibo, Vzla",
                            "location_id": 2462
                          },
                          {
                            "day": "08",
                            "month": "Oct",
                            "year": "2018",
                            "date": "October 8, 2018",
                            "bc_location_slug": "el-nacional",
                            "bc_profile_slug": "full-stack",
                            "status": "not-started",
                            "time": 1538956800,
                            "language": "Español",
                            "icon": "spain",
                            "name": "Desarrollo Full-Stack",
                            "slug": "desarrollo-full-stack",
                            "id": 2635,
                            "short_description": "Un curso premium, diseñado para iniciar tu carrera como desarrollador y conseguir tu primer trabajo. Aprende a programar y construye applicaciones utilizando HTML5, CSS3, React.js y Python. Integrate con otras plataformas y desarrolla tu propia API.<br />\r\nEste curso ofrece un programa de asesoramiento profesional avanzado que te ayudara a conseguir un trabajo: Sesiones de coaching, construccion de tu perfil profesional, networking, intruduccion a posibles empleadores, etc.",
                            "hr_duration": "288",
                            "week_duration": "16",
                            "featured_image": "https://www.4geeksacademy.co/wp-content/uploads/2017/09/full-stack.jpg",
                            "location": "El Nacional, CCS, Vzla",
                            "location_id": 2463
                          },
                          {
                            "day": "15",
                            "month": "Oct",
                            "year": "2018",
                            "date": "October 15, 2018",
                            "bc_location_slug": "downtown-miami",
                            "bc_profile_slug": "full-stack",
                            "status": "not-started",
                            "time": 1539561600,
                            "language": "English",
                            "icon": "united-states",
                            "name": "Full Stack Development",
                            "slug": "full-stack-development",
                            "id": 44,
                            "short_description": "A Premium Program designed to launch your career as a developer.  Learn the fundamentals of coding and build applications using HTML5, CSS3, React.js, and Python.  Integrate your application(s) with other platforms and create your own API. <br />\r\nThis course offers a dedicated career support team as well as: one-on-one coaching with our Senior mentors; networking opportunities; and introductions to potential employers.",
                            "hr_duration": "304",
                            "week_duration": "16",
                            "featured_image": "https://www.4geeksacademy.co/wp-content/uploads/2017/09/full-stack.jpg",
                            "location": "Miami Downtown, USA",
                            "location_id": 145
                          },
                          {
                            "day": "04",
                            "month": "Dec",
                            "year": "2018",
                            "date": "December 4, 2018",
                            "bc_location_slug": "downtown-miami",
                            "bc_profile_slug": "full-stack",
                            "status": "not-started",
                            "time": 1543881600,
                            "language": "English",
                            "icon": "united-states",
                            "name": "Full Stack Development",
                            "slug": "full-stack-development",
                            "id": 44,
                            "short_description": "A Premium Program designed to launch your career as a developer.  Learn the fundamentals of coding and build applications using HTML5, CSS3, React.js, and Python.  Integrate your application(s) with other platforms and create your own API. <br />\r\nThis course offers a dedicated career support team as well as: one-on-one coaching with our Senior mentors; networking opportunities; and introductions to potential employers.",
                            "hr_duration": "304",
                            "week_duration": "16",
                            "featured_image": "https://www.4geeksacademy.co/wp-content/uploads/2017/09/full-stack.jpg",
                            "location": "Miami Downtown, USA",
                            "location_id": 145
                          }*/
                        ],
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
    
    _loadDataCourses(data){
        let tempState = this.state;
        let now = Moment();
        tempState.courses = data.map( (course) =>{
            
            course["type"] = "course";
            course["finished"] = true;
            let event_date = Moment(course.date).isValid() ? Moment(course.date) : now;
            if( event_date.diff(now, 'days') >= 0 ){
                course["finished"] = false;
            }
            course["title"] = course.name;
            course["description"] = course.short_description;
            course["event_date"] = event_date.format("YYYY-MM-DD HH:mm:ss");
            course["lang"] = course.language.toLowerCase().substring(0,2);
            course["location_slug"] = course.bc_location_slug;
            course["banner_url"] = course.featured_image;
            course["address"] = course.location;
            course["url"] = "https://www.4geeksacademy.co/course/"+course.slug;
            
            return course;
        });
        this.setStoreState(tempState).emit();
    }
    
    getAllEvents(){
        return this.state.events.concat(this.state.courses);
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