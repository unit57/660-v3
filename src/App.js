import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import Body from './components/Body';
import Footer from './components/Footer';

require('../public/main.scss');

var contentful = require('contentful');
var _ = require('lodash');



const SPACE_ID = '6ejsh4lra81i';
const ACCESS_TOKEN = 'ae83cdc0357b6e565333942a7960fe2a41b9d001df24d74f1252d2db7978a637';

const client = contentful.createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
})



class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			artists: '',
			events: ''
		}
	}

	componentDidMount(){
		
		// get artists
		/*client.getEntries({
			  'content_type': 'artists',
			   order: 'sys.createdAt'
			})
			.then((artistsResponse) => {
				return artistsResponse.items	   
		})
		.then((artistsItems)=>{
		// get events
			const events = client.getEntries({
			  'content_type': 'event',
			   order: 'sys.createdAt'
			})
			// sort events in order by date 
			.then((eventsResponse) => {
				let sortedEvents = eventsResponse.items;
				return sortedEvents = _.orderBy(sortedEvents, ['fields.eventDate'],['asc']);		
			})
			.then((eventsResponse)=>{
				// console.log('eventsResponse', eventsResponse)
				// console.log('artistsResponse', artistsResponse)
				this.setState({
					artists: artistsItems,
					events: eventsResponse
				})
			})
		})*/
	}

	render() {
/*	console.log('get event model', this.state.events)	
	console.log('get artist model', this.state.artists)	*/
		return (
			<div className="component-app container-fluid">
				<Nav />
				<Body artists={this.state.artists} events={this.state.events}/>
				<Footer />
			</div>

		);
	}
};

ReactDOM.render(
	<BrowserRouter >
		<App />
	</BrowserRouter>
	, document.querySelector("#app"));