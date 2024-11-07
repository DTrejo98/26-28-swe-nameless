'use client';

import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-duplicates
import Button from 'react-bootstrap/card';
// eslint-disable-next-line import/no-duplicates
import Card from 'react-bootstrap/card';
import Link from 'next/link';
import { deleteEvent } from '../api/eventData';
import { useAuth } from '../utils/context/authContext';

function EventsCard({ eventsObj, onUpdate }) {
  const { user } = useAuth();

  // * for deleteing events
  const deleteThisEvent = () => {
    if (window.confirm(`Delete ${eventsObj.artist} at ${eventsObj.venue?.name}?`)) {
      deleteEvent(eventsObj.id).then(() => onUpdate());
    }
  };

  const isOwner = !eventsObj.id || eventsObj.uid === user.uid;

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={eventsObj.imageUrl} alt={eventsObj.artist} style={{ height: '400px' }} />
      <Card.Body>
        {console.warn(eventsObj)}
        <Card.Title>
          {eventsObj.artist} at {eventsObj.venue?.name}
        </Card.Title>
        <p className="card-text bold">
          {/* {eventsObj.sale && (
              <span>
                SALE
                <br />
              </span>
            )}{' '} */}
          {eventsObj.date ? eventsObj.date.slice(0, 10) : ''}
          {eventsObj.artist}
          {eventsObj.venue?.name}

          {/* {eventsObj.city} */}
          {eventsObj.ticketUrl}
          {eventsObj.ticketPrice}
        </p>

        {/* *DYNAMIC LINK TO events DETAILS  */}
        <Link href={`/events/details/${eventsObj.id}`} passHref>
          <Button variant="info">Details</Button>
        </Link>
        {isOwner && (
          <Link href={`/events/edit/${eventsObj.id}`} passHref>
            <Button variant="info">Edit</Button>
          </Link>
        )}
        {isOwner && (
          <Button variant="danger" onClick={deleteThisEvent} className="m-2">
            DELETE
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

EventsCard.propTypes = {
  eventsObj: PropTypes.shape({
    date: PropTypes.string,
    artist: PropTypes.string,
    id: PropTypes.number,
    uid: PropTypes.string,
    ticketUrl: PropTypes.string,
    ticketPrice: PropTypes.number,
    imageUrl: PropTypes.string,
    venue: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default EventsCard;
