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
				<Link className="artists-link col-md-4" key={index} to={`${this.props.match.url}/${artist.fields.name}`}>
					<div className="" >
						<div className="artist-container" key={index}>
							<div className="img-container">
								<img className="img-fluid" src={artist.fields.imageLink} alt=""/>
							</div>
							<p className="artist-name">{artist.fields.name}</p>
						</div>
					</div>
				</Link>
			);
		})
		return linkList;
	}
	
	render(){
	    if(!this.props.artists) {
	      return <h1> Loading </h1>
	    }
		let match = this.props.match;
		return (
			<div className='component-artists'>
				<h2> Artists </h2>
				<div className="artists-container row">
					{this.makeLinks}
				</div>	
			</div>
		);
	}
}




export default Artists;

