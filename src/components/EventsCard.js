'use client';

import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-duplicates
import Button from 'react-bootstrap/card';
// eslint-disable-next-line import/no-duplicates
import Card from 'react-bootstrap/card';
import Link from 'next/link';
import { deleteEvent } from '../api/eventData';

function eventsCard({ eventsObj, onUpdate }) {
  // * for deleteing events
  const deleteThisEvent = () => {
    if (window.confirm(`Delete ${eventsObj.title}?`)) {
      deleteEvent(eventsObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      {/* <Card.Img variant="top" src={venuesObj.image} alt={venuesObj.title} style={{ height: '400px' }} /> */}
      <Card.Body>
        <Card.Title>{eventsObj.title}</Card.Title>
        <p className="card-text bold">
          {eventsObj.artist} at {eventsObj.venue.name}
        </p>
        <Link href={`/events/details/${eventsObj.id}`} passHref>
          <Button variant="info">Details</Button>
        </Link>
        <Link href={`/events/edit/${eventsObj.id}`} passHref>
          <Button variant="info">Edit</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisEvent} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

eventsCard.propTypes = {
  eventsObj: PropTypes.shape({
    artist: PropTypes.string,
    venue: PropTypes.string,
    city: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default eventsCard;
