'use client';

import { useState, useEffect } from 'react';
import VenueForm from '@/components/CreateVenueForm';
import PropTypes from 'prop-types';
import { getSingleVenue } from '../../../../api/venueData';

export default function VenueEdit({ params }) {
  const [editItem, setEditItem] = useState({});

  const { firebaseKey } = params;

  useEffect(() => {
    getSingleVenue(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // pass object to form
  return (
    <>
      <h1>Create/Edit Venue</h1>
      <VenueForm obj={editItem} />
    </>
  );
}

VenueEdit.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
