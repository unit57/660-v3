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
						<Events {...props} events={this.props.events}/>)} />
					<Route path={'/events/:eventName'} render={(props)=>(
						<Event {...props}/>)} />
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
		name: "name 1",
		about: "I do stuff I do things"
	},{
		name: "name 2",
		about: "I dont do anything"
	}]
}

export default Body;