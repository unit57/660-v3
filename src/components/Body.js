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
						<Artists {...props} artists={this.props.artists}/>)} />
					<Route path={'/artists/:name'} render={(props)=>(
						<Artist {...props} artists={this.props.artists}/>)} />
					{/*Events Routes*/}
					<Route exact path="/events" render={(props)=>(
						<Events {...props} events={this.props.events}/>)} />
					<Route path={'/events/:eventName'} render={(props)=>(
						<Event {...props} events={this.props.events}/>)} />
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
			imageLink:" ",
			name:" Person 2",
			website:"things.com"
		}
	}],
	eventsDefault: [{
		fields: {
			eventDate:"2018-01-24",
			eventDescription:"JUST A STAGE [Stage Series]↵Each musician has their own stage, scattered throughout Archetype. ↵↵The Stage Series is a month-long experimentation of of the relationships between the music, the audience, and the space.↵↵Mostly BYOB↵By Donation ($3 Suggested)↵* * * * * *↵DONATE to Archetype so we can continue making strange, sincere art in Jersey City. ",
			eventImageLink:"https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/26952251_10109176470112219_4532918177396622524_o.jpg?oh=75b3697596c51f8fd3e6852e1e3bfdab&oe=5AF2E46B",
			eventName:"JUST A STAGE | After School",
			eventTime:"7pm"
		}
	},{
		fields: {
			eventDate:"Event 2",
			eventDescription:" ",
			eventImageLink:" ",
			eventName:" ",
			eventTime:" "
		}
	}]
}

export default Body;




