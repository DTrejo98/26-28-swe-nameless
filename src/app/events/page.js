'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getAllUserEvents } from '../../api/eventData';
import { useAuth } from '../../utils/context/authContext';
import EventsCard from '../../components/EventsCard';

export default function Eventspage() {
  // *set state for events
  const [events, setEvents] = useState([]);

  const { user } = useAuth();

  // *function to get all events
  const getAllTheEvents = () => {
    getAllUserEvents(user.uid).then(setEvents);
  };

  // *make api call to get events
  useEffect(() => {
    getAllTheEvents();
  }, [user]);

  return (
    <div className="text-center my-4">
      <Link href="/events/edit/new" passHref>
        <Button>Add Event</Button>
      </Link>
      <div className="d-flex flex-wrap">{events.length === 0 ? <h2>You have not created any events</h2> : events.map((event) => <EventsCard key={event.id} eventsObj={event} onUpdate={getAllTheEvents} />)}</div>
    </div>
  );
}
