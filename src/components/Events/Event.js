import React from 'react';
import { Link } from 'react-router-dom';


const Event = ({match}) => {
  //var Event = EventData.find(e => e.name == match.params.EventName);
  console.log('events', match )
  var eventData;

    eventData = <div>
                    <h3>{match.params.eventName}</h3>
                 </div>

  return (
    <div className='component-event'>
      <div>
        <Link to ="/events"> Events </Link>
        {eventData}
      </div>
    </div>

    );

}
export default Event;