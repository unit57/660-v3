import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';


class Events extends Component {
  constructor(props){
    super(props)

  }
  componentDidMount() {
    //console.log('props~~~~~', this.props)
  }
/*  getTickets(event) {
    if (event.fields.eventTickets) {
      return (
        <span> Get Tickets &nbsp;
          <a className="event-tickets" href={event.fields.eventTickets} target="_blank">here</a>.
        </span>
      );
    }
  }
  {this.getTickets(event)}*/

  get makeLinks() {
    let linkList = this.props.events.map((event, index) => {
    let dateSplit = event.fields.eventDate.split('-');
    let formatDate = dateSplit[1] + '.' + dateSplit[2] + '.' + dateSplit[0];
      return (
        <Link className="event-link col-md-12" key={index} to={`${this.props.match.url}/${event.fields.eventName}`}>
            <div className="event-container row">
            <div className="img-container col-md-4" key={index}>
                <img className="img-fluid" src={event.fields.eventImageLink} alt=""/>
            </div>

            <div className="col-md-4">
              <p>{formatDate}</p>
              <p>{event.fields.eventName}</p>
              <p>{event.fields.eventDescription}</p>
              <p>{event.fields.eventTime}</p>
            </div>
      
            </div>
            

        </Link>
      );
    })
    return linkList;
  }

  render(){
    
    //console.log('props~~~~~', this.props)
    if(!this.props.events) {
      return <h1> Loading </h1>
    }
    let match = this.props.match;
    //console.log('match', match)
    return (
      <div className='component-events row'>
        <h2> Events </h2>
        {this.makeLinks}
      </div>
    );
  }
}


export default Events;