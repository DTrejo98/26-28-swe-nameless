import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/card';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteVenue } from '../api/venueData';

function venuesCard({ venuesObj, onUpdate }) {
  // * for deleteing venues
  const deleteThisVenue = () => {
    if (window.confirm(`Delete ${venuesObj.title}?`)) {
      deleteVenue(venuesObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      {/* <Card.Img variant="top" src={bookObj.image} alt={venuesObj.title} style={{ height: '400px' }} /> */}
      <Card.Body>
        <Card.Title>{venuesObj.name}</Card.Title>
        <p className="card-text bold">
          {/* {bookObj.sale && (
              <span>
                SALE
                <br />
              </span>
            )}{' '} */}
          {venuesObj.city}
          {venuesObj.state}
          {venuesObj.address}
        </p>
        {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS
          <Link href={`/book/${bookObj.firebaseKey}`} passHref>
            <Button variant="primary" className="m-2">
              VIEW
            </Button>
          </Link> */}
        {/* DYNAMIC LINK TO EDIT THE venues DETAILS  */}
        <Link href={`/venues/edit/${venuesObj.id}`} passHref>
          <Button variant="info">Details</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisVenue} className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

venuesCard.propTypes = {
  venuesObj: PropTypes.shape({
    name: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    address: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default venuesCard;
