'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { deleteEvent, getSingleEvent } from '../../../../api/eventData';
import { useAuth } from '../../../../utils/context/authContext';
import { createRsvp, deleteRsvp, getSingleUserRsvp } from '../../../../api/rsvpData';

export default function ViewEventDetails({ params }) {
  const [eventDetails, setEventDetails] = useState({});
  const [rsvpd, setRsvpd] = useState(false);
  const { id } = params;
  const { user } = useAuth();

  useEffect(() => {
    getSingleEvent(id).then((data) => {
      setEventDetails(data);
    });
    getSingleUserRsvp(user.uid, id).then((rsvpData) => {
      setRsvpd(!!rsvpData);
    });
  }, [id, user]);

  const rsvp = () => {
    const payload = {
      eventId: id,
      uid: user.uid,
    };
    createRsvp(payload).then(() => {
      setRsvpd(true); // Update state after RSVP
    });
  };

  const rescindRsvp = () => {
    if (window.confirm(`Rescind RSVP?`)) {
      deleteRsvp(user.uid, id).then(() => {
        setRsvpd(false); // Update state after rescinding RSVP
      });
    }
  };

  const deleteThisEvent = () => {
    if (window.confirm(`Delete ${eventDetails.artist} at ${eventDetails.venue?.name}?`)) {
      deleteEvent(id).then();
    }
  };

  const isOwner = !id || user.uid === user.id;

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
          <Button variant={rsvpd ? 'danger' : 'outline-danger'} onClick={rsvpd ? rescindRsvp : rsvp}>
            {rsvpd ? 'Rescind RSVP' : 'RSVP'}
          </Button>
          {isOwner && (
            <Button variant="danger" onClick={deleteThisEvent} className="m-2">
              DELETE
            </Button>
          )}
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
