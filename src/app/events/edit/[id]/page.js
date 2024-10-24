'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSingleVenue } from '../../../../api/venueData';
import VenueForm from '../../../../components/CreateVenueForm';

export default function EditVenue({ params }) {
  const [editItem, setEditItem] = useState({});
  const { id } = params;

  useEffect(() => {
    getSingleVenue(id).then(setEditItem);
  }, [id]);

  return <VenueForm obj={editItem} />;
}

EditVenue.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
