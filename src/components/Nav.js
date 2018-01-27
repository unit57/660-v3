import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';


class Nav extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div className='component-nav'>
				<nav>
					<div className="nav-left">
						<div className="dropdown">
						 	<Link to="/"><button className="dropbtn">LOGO</button></Link>
						</div>
					</div>
					<div className="nav-right">

						<div className="dropdown">
						 	<Link to="/"><button className="dropbtn">Home</button></Link>
						</div>
						<div className="dropdown">
						 	<Link to="/artists"><button className="dropbtn">Artists</button></Link>
						</div>
						<div className="dropdown">
						 	<Link to="/events"><button className="dropbtn">Events</button></Link>
						</div>
		
						<div className="dropdown">
						 	<button className="dropbtn">About</button>
						  		<div className="dropdown-content">
								    <Link to ="/about660">About 660</Link>
								    <a href="/about-archetype">About Archetype</a>
								    {/*<a href="#">Link 3</a>*/}
						  		</div>
						</div>
						<div className="dropdown">
						 	<Link to="/contact"><button className="dropbtn">Contact</button></Link>
						</div>
					</div>
				</nav>
				<hr />
			</div>
		);
	}
}
export default Nav;