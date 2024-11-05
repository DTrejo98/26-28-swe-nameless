'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/card';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteVenue } from '../api/venueData';

function VenuesCard({ venuesObj, onUpdate }) {
  // * for deleteing venues
  const deleteThisVenue = () => {
    if (window.confirm(`Delete ${venuesObj.name}?`)) {
      deleteVenue(venuesObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      {/* <Card.Img variant="top" src={venuesObj.image} alt={venuesObj.title} style={{ height: '400px' }} /> */}
      <Card.Body>
        <Card.Title>{venuesObj.name}</Card.Title>
        <p className="card-text bold">
          {/* {venuesObj.sale && (
              <span>
                SALE
                <br />
              </span>
            )}{' '} */}
          {venuesObj.address}
          {venuesObj.city}
          {venuesObj.state}
        </p>
        {/* DYNAMIC LINK TO VIEW THE Venue DETAILS
          <Link href={`/venues/${venuesObj.id}`} passHref>
            <Button variant="primary" className="m-2">
              VIEW
            </Button>
          </Link> */}
        {/* DYNAMIC LINK TO EDIT THE venues DETAILS  */}
        <Link href={`/venues/edit/${venuesObj.id}`} passHref>
          <Button variant="info">Edit</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisVenue} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

VenuesCard.propTypes = {
  venuesObj: PropTypes.shape({
    name: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    address: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default VenuesCard;
