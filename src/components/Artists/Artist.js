import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Artist extends Component {
  constructor(props){
    super(props)

  }
  makeArtist(match) {
    //let artist= this.props.artists.map((artist, index) => {
      //console.log('artist name ', artist.name)
      let artist = this.props.artists.find((a)=>{
        return a.fields.name === match.params.name
      })
      
      return (
             <div>
               <h3>{artist.fields.name}</h3>
               <h4>{artist.fields.about}</h4>
               <p> {artist.fields.website}</p>
               <img className="img" src={artist.fields.imageLink} alt="" width="50%" height="50%"/>
             </div>
      );
    };
  
  render(){
    let match = this.props.match

    return(
      <div className="component-artists">
        <Link to='/artists'> Artists </Link>
        {this.makeArtist(match)}
      </div>
    );
  }
}
export default Artist;





  


