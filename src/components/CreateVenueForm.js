'use client';

import React, { useState } from 'react';
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
export default function VenueForm() {
  const { user } = useAuth();
  const [venueDetials, setVenueDetails] = useState(initialState);

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
    e.preventDefault();
  };
  // when submit button is pressed this function is run and prevents page from reloading
  const handleSubmit = async (e) => {
    e.preventDefault();

    // awaits API call and updates venue with FirebaseKey and adds uid
    const response = await createVenue({
      ...setVenueDetails,
      userId: user.uid,
    });
    await updateVenues(response.name);

    resetForm();
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Venue Name</label>
        <input onChange={handleVenueUpdate} type="text" name="name" id="name" className="form-control" value={venueDetials.name} required />
      </div>
      <div>
        <label htmlFor="text">Address</label>
        <input onChange={handleVenueUpdate} type="text" name="address" id="address" className="form-control" value={venueDetials.address} />
      </div>
      <div>
        <label htmlFor="text">City</label>
        <input onChange={handleVenueUpdate} type="text" name="city" id="city" className="form-control" value={venueDetials.city} />
      </div>
      <div>
        <label htmlFor="text">State</label>
        <input onChange={handleVenueUpdate} type="text" name="state" id="state" className="form-control" value={venueDetials.value} />
      </div>
      <button className="btn btn-success" type="submit">
        Add/Update
      </button>
    </form>
  );
}
