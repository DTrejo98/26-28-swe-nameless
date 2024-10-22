'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSingleEvent } from '../../../../api/eventData';

// import { getSingleVenue } from '../../../../api/venueData';

export default function ViewEventDetails({ params }) {
  const [eventDetails, setEventDetails] = useState({});
  // const [venueDetails, setVenueDetails] = useState([]);
  const { id } = params;

  useEffect(() => {
    getSingleEvent(id).then(setEventDetails);
    console.log(getSingleEvent(id));
    // getSingleVenue(id).then(setVenueDetails);
  }, [id]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details">
        <p>
          Event Name
          {eventDetails.artist}
        </p>
      </div>
    </div>
  );
}

ViewEventDetails.propTypes = {
  params: PropTypes.objectOf({
    date: PropTypes.string,
  }).isRequired,
};
