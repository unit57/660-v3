import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Artist extends Component {
  constructor(props){
    super(props)
  }
  hasWebpage(artist){
    if (artist.fields.website) {
      let fName = artist.fields.name.split(' ')[0]
      return (
        <span> See more from {fName}&nbsp;
          <a className="artist-url"href={artist.fields.website} target="_blank">here</a>.
        </span>
        );
    }
  }
  
  makeArtist(match) {
      let artist = this.props.artists.find((a)=>{
        return a.fields.name === match.params.name
  });
    
      return (
             <div className="artist-wrapper">
                  <div className="image-wrapper">
                      <img className="artist-img mx-auto" src={artist.fields.imageLink} alt="" width="50%" height="50%"/>
                  </div>
                 <p className="artist-name">{artist.fields.name}</p>
                 <p className="artist-about">{artist.fields.about}</p>
                 {this.hasWebpage(artist)}
             </div>
      );
    };
  
  render(){
    if(!this.props.artists) {
        return <h1> Loading </h1>
    }
    
    let match = this.props.match
    return(
      <div className="component-artist">
        <Link  className="back-to-artists" to='/artists'> Back to Artists </Link>
        {this.makeArtist(match)}
      </div>
    );
  }
}
export default Artist;





  


