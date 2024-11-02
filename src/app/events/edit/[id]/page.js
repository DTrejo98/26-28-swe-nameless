'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getSingleEvent } from '../../../../api/eventData';
import EventForm from '../../../../components/CreateEventForm';

export default function EditEvent({ params }) {
  const [editItem, setEditItem] = useState({});
  const { id } = params;

  useEffect(() => {
    getSingleEvent(id).then(setEditItem);
  }, [id]);

  return <EventForm obj={editItem} />;
}

EditEvent.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
