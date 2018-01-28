import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Event extends Component {
  constructor(props){
    super(props)

  }
  makeEvent(match) {
    //let event= this.props.events.map((event, index) => {
      //console.log('event name ', event.name)
      let event = this.props.events.find((e)=>{
        return e.fields.eventName === match.params.eventName
      })
      
      return (
             <div>
               <h3>{event.fields.eventName}</h3>
               <h4>{event.fields.eventDescription}</h4>
               <p> {event.fields.eventDate}</p>
               <p> {event.fields.eventTime}</p>
               <img className="img" src={event.fields.eventImageLink} alt="" width="50%" height="50%"/>
             </div>
      );
    };
  
  render(){
    if(!this.props.events) {
      return <h1> Loading</h1>
    }
    let match = this.props.match
    return(
      <div className="component-events">
        <Link to='/events'> Events </Link>
        {this.makeEvent(match)}
      </div>
    );
  }
}
export default Event;
