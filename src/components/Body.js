import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Artists from './Artists/Artists';
import Artist from './Artists/Artist';
import Events from './Events/Events';
import Event from './Events/Event';
import Home from './Home';

import Contact from './Contact';
import About660 from './About660';
import AboutArchetype from './AboutArchetype';


class Body extends Component {
	constructor(props){
		super(props)
	}
	render(){
		//console.log('propsbody', this.props.artists)
		return(
			<div className='component-body'>		
				<Switch>
					<Route exact={true} path="/" component={Home} />
					{/*Artists Routes*/}
					<Route exact path="/artists" render={(props)=>(
						<Artists {...props} artists={this.props.artistsDefault}/>)} />
					<Route path={'/artists/:name'} render={(props)=>(
						<Artist {...props} artists={this.props.artistsDefault}/>)} />
					{/*Events Routes*/}
					<Route exact path="/events" render={(props)=>(
						<Events {...props} events={this.props.eventsDefault}/>)} />
					<Route path={'/events/:eventName'} render={(props)=>(
						<Event {...props} events={this.props.eventsDefault}/>)} />
					<Route exact path={'/contact'} component={Contact} />
					<Route exact path={'/about660'} component={About660} />
					<Route exact path={'/about-archetype'} component={AboutArchetype} />
				</Switch>
			</div>


		);
	}
}

Body.defaultProps = {
	artistsDefault: [{
		fields:{
			about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			imageLink:"https://media.npr.org/assets/img/2014/08/25/mcfly-vest_wide-c3b751c04946bf6bbbe3d4d41b033d5c3e88cdc8.jpg?s=1400",
			name:"Alex Pergement",
			website:"https://www.facebook.com/alex.pergament.3"
		}
	},{
		fields:{
			about:"Fotget about dre",
			imageLink:"http://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/9/97//doc-brown.jpg?itok=7fJMvKsO",
			name:" John Fathom",
			website:"things.com"
		}
	},{
		fields:{
			about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			imageLink:"https://media.npr.org/assets/img/2014/08/25/mcfly-vest_wide-c3b751c04946bf6bbbe3d4d41b033d5c3e88cdc8.jpg?s=1400",
			name:"Alex ",
			website:"https://www.facebook.com/alex.pergament.3"
		}
	},{
		fields:{
			about:"Fotget about dre",
			imageLink:"https://www.cicis.com/media/1176/pizza_trad_pepperonibeef.png",
			name:"John",
			website:"things.com"
		}
	}],
	eventsDefault: [{
		fields: {
			eventDate:"2018-01-24",
			eventDescription:"JUST A STAGE [Stage Series]↵Each musician has their own stage, scattered throughout Archetype. ↵↵The Stage Series is a month-long experimentation of of the relationships between the music, the audience, and the space.",
			eventImageLink:"https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/26952251_10109176470112219_4532918177396622524_o.jpg?oh=75b3697596c51f8fd3e6852e1e3bfdab&oe=5AF2E46B",
			eventName:"JUST A STAGE | After School",
			eventTime:"7pm",
			eventTickets:"https://www.eventbrite.com/preview?eid=42601420997"
		}
	},{
		fields: {
			eventDate:"2018-01-24",
			eventDescription:"Today things will happen and it will be possible",
			eventImageLink:"http://nohopizza.com/images/pizza.jpeg",
			eventName:"Event 2",
			eventTime:"10pm",
			eventTickets:""
		}
	}]
}

export default Body;




