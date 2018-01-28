import React, { Component } from 'react';
//import { Link, Route } from 'react-router-dom';



class Footer extends Component {
	constructor(props){
		super(props)

	}
	componentDidMount() {
	
	}
	
	render(){
		
		return (
			<div className='component-footer row'>
				<div className="col-md-4">
					powered by contentful 
				</div>
				<div className="col-md-4">
					address
				</div>
				<div className="col-md-4">
					facebook | instagram 
				</div>

			</div>
		);
	}
}




export default Footer;

