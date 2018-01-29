import React, { Component } from 'react';
//import { Link, Route } from 'react-router-dom';



class Contact extends Component {
	constructor(props){
		super(props)

	}
	componentDidMount() {
	
	}
	
	render(){
		
		return (
			<div className='component-contact'>
				<h2> Contact </h2>
				<form className="contact-form" action="https://formspree.io/eric.q.sanchez@gmail.com"
				      method="POST">
					<div className="form-body">
						<span className="form-label"> Send us a message </span>
					    <input className="contact-email" type="text" name="_replyto" placeholder="Enter your Email"/>
					    <textarea className="contact-body" type="email" name="name" placeholder="Enter your message"/>
					    <input className="contact-submit-btn" type="submit" value="Send"/>
						{/* make a thank you for submitting page*/}
					    <input type="hidden" name="_next" value="/thankyou" />
					</div>
				</form>
			</div>
		);
	}
}




export default Contact;

