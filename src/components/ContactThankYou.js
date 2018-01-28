import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class ContactThankYou extends Component {
	constructor(props){
		super(props)

	}
	componentDidMount() {
		//window.scrollTo(0,0);

	}
	
	render(){
		
		return (
			<div className='component-contac-thank-you'>
				<h2> Thank you for your message </h2>
				<Link to="/"><h3>Home</h3></Link>
			</div>
		);
	}
}




export default ContactThankYou;

