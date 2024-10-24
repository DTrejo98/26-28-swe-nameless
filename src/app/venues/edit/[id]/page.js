'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import VenueForm from '@/components/CreateVenueForm';
import { getSingleVenue } from '../../../../api/venueData';

// setup function that allows a Venue to be edited
export default function EditVenue({ params }) {
  const [editItem, setEditItem] = useState([]);
  // grabs the id
  const { id } = params;

  // makes a call to the API to get the Venue data
  useEffect(() => {
    getSingleVenue(id).then(setEditItem);
  }, [id]);

  // pass object to form
  return <VenueForm obj={editItem} />;
}

EditVenue.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
