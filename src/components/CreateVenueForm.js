'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { useAuth } from '../utils/context/authContext';
import { createVenue } from '../api/venueData';
// clears out the form after the user submits the form
const initialState = {
  name: '',
  address: '',
  city: '',
  state: '',
};
// pulls in user and object details
export default function VenueForm({ obj = initialState }) {
  const { user } = useAuth();
  const [venueDetails, setVenueDetails] = useState(initialState);
  const router = useRouter();
  // Grants access to the event object, destructing the name and the value of the property
  const handleVenueUpdate = (e) => {
    const { name, value } = e.target;
    // calling setVenueDetails modifying prevState and spreading it
    setVenueDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const resetForm = (e) => {
    e?.preventDefault();
  };
  // when submit button is pressed this function is run and prevents page from reloading
  const handleSubmit = (e) => {
    e.preventDefault();
    {
      const payload = { ...venueDetails, uid: user.uid };
      createVenue(payload).then(() => router.push('/'));
    }
    resetForm();
  };
  return (
    <form onSubmit={handleSubmit} className="text-black">
      <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Venue</h2>
      <div>
        <label htmlFor="name" style={{ color: 'white ' }}>
          Venue Name
        </label>
        <input onChange={handleVenueUpdate} type="text" name="name" id="name" className="form-control" value={venueDetails.name} required />
      </div>
      <div>
        <label htmlFor="text" style={{ color: 'white ' }}>
          Address
        </label>
        <input onChange={handleVenueUpdate} type="text" name="address" id="address" className="form-control" value={venueDetails.address} />
      </div>
      <div>
        <label htmlFor="text" style={{ color: 'white ' }}>
          City
        </label>
        <input onChange={handleVenueUpdate} type="text" name="city" id="city" className="form-control" value={venueDetails.city} />
      </div>
      <div>
        <label htmlFor="text" style={{ color: 'white ' }}>
          State
        </label>
        <input onChange={handleVenueUpdate} type="text" name="state" id="state" className="form-control" value={venueDetails.value} />
      </div>
      <button className="btn btn-success" type="submit">
        Add/Update
      </button>
    </form>
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
