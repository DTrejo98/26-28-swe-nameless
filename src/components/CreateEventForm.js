'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getAllVenues } from '../api/venueData';
import { createEvent, updateEvents } from '../api/eventData';

// clears out the form after the user submits the form
const initialState = {
  eventName: '',
  venueName: '',
  artist: '',
  details: '',
  ticketUrl: '',
  ticketPrice: '',
  imageUrl: '',
};

// pulls in user and object details
function EventForm({ obj = initialState }) {
  const { user } = useAuth();
  const [formInput, setFormInput] = useState(initialState);
  const [venues, setVenues] = useState([]);
  const router = useRouter();

  // brings venue data in for editing the venue
  useEffect(() => {
    getAllVenues().then(setVenues);

    if (obj.id) setFormInput(obj);
  }, [obj]);

  // Grants access to the event object, destructing the name and the value of the form input
  const handleChange = (e) => {
    const { name, value } = e.target;
    // calling setVenueDetails modifying prevState and spreading it
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // when submit button is pressed this function runs and prevents page from reloading
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formInput, uid: user.uid };
    // if the object already has an id then the updateVenues function is called router pushes the updated information to the venues page-else it creates a new venue
    if (obj.id) {
      updateEvents(payload).then(() => router.push(`/events/`));
    } else {
      createEvent(payload).then(() => {
        router.push(`/events/`);
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="text-black">
      <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Event</h2>

      <FloatingLabel controlId="floatingInput1" label="Event Name" className="mb-3">
        <Form.Control type="text" placeholder="Event Name" name="eventName" value={formInput.eventName} onChange={handleChange} required />
      </FloatingLabel>

      {/* Dropdown to select a venue */}
      <FloatingLabel controlId="floatingSelect" label="Venue Name">
        <Form.Select aria-label="Venue" name="venue_id" onChange={handleChange} className="mb-3" value={formInput.venue_id || ''} required>
          <option value="">Select a Venue</option>
          {venues.map((venue) => (
            <option key={venue.id} value={venue.id}>
              {venue.name} {venue.city}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Artist Name" className="mb-3">
        <Form.Control type="text" placeholder="Artist Name" name="artist" value={formInput.artist} onChange={handleChange} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea" label="Details" className="mb-3">
        <Form.Control as="textarea" placeholder="Details" style={{ height: '100px' }} name="details" value={formInput.details} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Ticket URL" className="mb-3">
        <Form.Control type="url" placeholder="Enter a ticket URL link" name="ticketUrl" value={formInput.ticketUrl} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput4" label="Ticket Price" className="mb-3">
        <Form.Control type="number" placeholder="Ticket price" name="ticketPrice" value={formInput.price} onChange={handleChange} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput5" label="Event Image" className="mb-3">
        <Form.Control type="url" placeholder="Enter a venue image url" name="imageUrl" value={formInput.image} onChange={handleChange} required />
      </FloatingLabel>

      <Button type="submit">{obj.id ? 'Update' : 'Create'} Event</Button>
    </Form>
  );
}

EventForm.propTypes = {
  obj: PropTypes.shape({
    eventName: PropTypes.string,
    venue_id: PropTypes.number,
    artist: PropTypes.string,
    details: PropTypes.string,
    ticketUrl: PropTypes.string,
    ticketPrice: PropTypes.number,
    imageUrl: PropTypes.string,
    id: PropTypes.number,
  }),
};

export default EventForm;
