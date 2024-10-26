'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSingleEvent } from '../../../../api/eventData';

export default function ViewEventDetails({ params }) {
  const [eventDetails, setEventDetails] = useState({});
  const { id } = params;

  useEffect(() => {
    getSingleEvent(id).then((data) => {
      setEventDetails(data);
    });
  }, [id]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details">
        <h3>
          {eventDetails.artist} at {eventDetails.venue?.name}
          <ul>
            <li>{eventDetails.date}</li>
            <li>{eventDetails.venue?.address}</li>
            <li>{eventDetails.venue?.city}</li>
            <li>{eventDetails.venue?.state}</li>
          </ul>
        </h3>
      </div>
    </div>
  );
}

ViewEventDetails.propTypes = {
  params: PropTypes.shape([]),
  eventDetails: PropTypes.shape({
    artist: PropTypes.string,
    date: PropTypes.string,
    venue: PropTypes.shape({
      name: PropTypes.string,
      address: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
    }),
  }).isRequired,
};
