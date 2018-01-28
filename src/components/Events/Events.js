import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';


class Events extends Component {
  constructor(props){
    super(props)

  }
  componentDidMount() {
    //console.log('props~~~~~', this.props)
  }
  get makeLinks() {
    let linkList = this.props.events.map((event, index) => {
      return (
        <li key={index}>
          <Link to={`${this.props.match.url}/${event.fields.eventName}`}>{event.fields.eventName}
          </Link>
        </li>
      );
    })
    return linkList;
  }

  render(){
    //console.log('props~~~~~', this.props)

    let match = this.props.match;
    //console.log('match', match)
    return (
      <div className='component-category'>
        <h2> Events </h2>
        {this.makeLinks}
{/*        <Route path={'/events/:eventName'} render={(props)=>(
            <Event {...props}/>)} />*/}
      </div>
    );
  }
}


export default Events;