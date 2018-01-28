import React, { Component } from 'react';
//import { Link, Route } from 'react-router-dom';



class Location extends Component {
	constructor(props){
		super(props)

	}
	componentDidMount() {
		window.scrollTo(0,0);
	}
	
	render(){
		
		return (
			<div className='component-location'>
				<h2> Location </h2>
				<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12096.28917536404!2d-74.0649565!3d40.716425!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3fe4cb5da1b585ed!2s660+Studios!5e0!3m2!1sen!2sus!4v1517120863651" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
			</div>
		);
	}
}




export default Location;

