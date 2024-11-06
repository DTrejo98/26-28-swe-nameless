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
        <Card.Title>{rsvpObj.event.artist}</Card.Title>
        <p className="card-text bold">{rsvpObj.event.date}</p>
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
      artist: PropTypes.string,
      date: PropTypes.string,
    }),
  }).isRequired,
};
