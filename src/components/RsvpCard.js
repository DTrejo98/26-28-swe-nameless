'use client';

import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-duplicates
import Button from 'react-bootstrap/card';
// eslint-disable-next-line import/no-duplicates
import Card from 'react-bootstrap/card';
import Link from 'next/link';

export default function RsvpCard({ rsvpObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{rsvpObj.event.title}</Card.Title>
        <p className="card-text bold">
          {rsvpObj.event.artist} at {rsvpObj.event.venue?.name}
        </p>
        <Link href={`/events/details/${rsvpObj.eventId}`} passHref>
          <Button variant="info">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

RsvpCard.propTypes = {
  rsvpObj: PropTypes.shape({
    eventId: PropTypes.number,
    event: PropTypes.shape({
      title: PropTypes.string,
      artist: PropTypes.string,
      venue: PropTypes.shape({
        name: PropTypes.string,
      }),
      city: PropTypes.string,
      id: PropTypes.number,
    }),
  }).isRequired,
};
