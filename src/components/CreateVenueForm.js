'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { createVenue, updateVenues } from '../api/venueData';

// clears out the form after the user submits the form
const initialState = {
  name: '',
  address: '',
  city: '',
  state: '',
};
// pulls in user and object details
function VenueForm({ obj = initialState }) {
  const { user } = useAuth();
  const [venueDetails, setVenueDetails] = useState(initialState);
  const router = useRouter();

  // brings venue data in for editing the venue
  useEffect(() => {
    if (obj.id) setVenueDetails(obj);
  }, [obj]);

  // Grants access to the event object, destructing the name and the value of the form input
  const handleVenueUpdate = (e) => {
    const { name, value } = e.target;
    // calling setVenueDetails modifying prevState and spreading it
    setVenueDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // when submit button is pressed this function is run and prevents page from reloading
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...venueDetails, uid: user.uid };
    // if the object already has an id then the updateVenues function is called router pushes the updated information to the venues page-else it creates a new venue
    if (obj.id) {
      updateVenues(payload).then(() => router.push(`/venues/`));
    } else {
      createVenue(payload).then(() => {
        router.push(`/venues/`);
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="text-black">
      <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Venue</h2>

      <FloatingLabel controlId="floatingInput1" label="name" className="mb-3">
        <Form.Control type="text" placeholder="name" name="name" value={venueDetails.name} onChange={handleVenueUpdate} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="address" className="mb-3">
        <Form.Control type="text" placeholder="Address" name="address" value={venueDetails.address} onChange={handleVenueUpdate} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="city" className="mb-3">
        <Form.Control type="text" placeholder="City" name="city" value={venueDetails.city} onChange={handleVenueUpdate} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput4" label="state" className="mb-3">
        <Form.Control type="text" placeholder="State" name="state" value={venueDetails.state} onChange={handleVenueUpdate} required />
      </FloatingLabel>

      <Button type="submit">{obj.id ? 'Update' : 'Create'} Venue</Button>
    </Form>
  );
}

VenueForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    id: PropTypes.number,
  }),
};

export default VenueForm;
