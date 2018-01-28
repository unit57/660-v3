import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';



class Artists extends Component {
	constructor(props){
		super(props)

	}
	componentDidMount() {
	
	}
	get makeLinks() {
		let linkList = this.props.artists.map((artist, index) => {
			return (
				<li key={index}>
					<Link to={`${this.props.match.url}/${artist.fields.name}`}>{artist.fields.name}
					</Link>
				</li>
			);
		})
		return linkList;
	}
	
	render(){

		let match = this.props.match;
		
		return (
			<div className='component-artists'>
				<h2> Artists </h2>
				<ul>
					{this.makeLinks}
				</ul>	
			</div>
		);
	}
}




export default Artists;

