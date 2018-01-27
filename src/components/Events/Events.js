import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';


class Events extends Component {
  constructor(props){
    super(props)

  }
  componentDidMount(){
    //console.log('props~~~~~', this.props)
  }
  render(){
    //console.log('props~~~~~', this.props)

    let match = this.props.match;
    //console.log('match', match)
    return (
      <div className='component-category'>
        <h2> events </h2>
        <ul>
          <li><Link to={`${match.url}/event 1`}>event 1</Link></li>
          <li><Link to={`${match.url}/event 2`}>event 2</Link></li>
          <li><Link to={`${match.url}/event 3`}>event 3</Link></li>
        </ul>
        <Route path={'/events/:eventName'} render={(props)=>(
            <Event {...props}/>)} />
      </div>
    );
  }
}


export default Events;