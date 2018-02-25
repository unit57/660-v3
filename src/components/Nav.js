import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

class Nav extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div className='component-nav'>
				<nav className="row">
					<div className="nav-left col-md-6">
						<div className="dropdown">
						 	<Link to="/"><button className="dropbtn">LOGO</button></Link>
						</div>
					</div>
					<div className="nav-right  col-md-6">

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
								    <Link to ="/about660">660 Studios</Link>
								    <Link to ="/archetype">Archetype</Link>
								    <Link to ="/after-school">After School</Link>
								    <Link to ="/dustbowl-society">Dustbowl Society</Link>
								    <Link to ="/mad-future">Mad Future</Link>
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
