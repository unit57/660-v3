import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Footer extends Component {
	constructor(props){
		super(props)

	}
	componentDidMount() {
	
	}
	
	render(){
		
		return (
			<div className='component-footer row'>
				<div className="col-md-4 social">
					facebook | instagram 
				</div>
				
				<div className="col-md-4 address">
					<Link to="/location"> 660 Grand St<br />
					Jersey City, NJ 07304</Link>
				</div>
				
				<div className="col-md-4 contentful-attr">
					<a href="https://www.contentful.com/" rel="nofollow" target="_blank"><img src="https://images.contentful.com/fo9twyrwpveg/7Htleo27dKYua8gio8UEUy/0797152a2d2f8e41db49ecbf1ccffdaa/PoweredByContentful_DarkBackground_MonochromeLogo.svg" style={{maxWidth:"35",width:"35%"}} alt="Powered by Contentful" /></a>
				</div>

			</div>
		);
	}
}




export default Footer;

