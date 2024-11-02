'use client';

import React, { useEffect, useState } from 'react';
import { getAllUserRsvps } from '../../api/rsvpData';
import RsvpCard from '../../components/RsvpCard';
import { useAuth } from '../../utils/context/authContext';

function RsvpPage() {
  // *set state for events
  const [rsvps, setRsvps] = useState([]);

  // *Get user ID using useAuth hook
  const { user } = useAuth();

  // *function that makes the API call to get all events
  const getAllRsvpsByUser = () => {
    getAllUserRsvps(user.uid).then(setRsvps);
  };

  // *API call to get allEvents on component to render
  useEffect(() => {
    getAllRsvpsByUser();
  }, []);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">
        {rsvps.map((rsvp) => (
          <RsvpCard key={rsvp.event.id} rsvpObj={rsvp} />
        ))}
      </div>
    </div>
  );
}

export default RsvpPage;
