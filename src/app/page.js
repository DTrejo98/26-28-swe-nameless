'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getAllEvents } from '../api/eventData';
// import { useAuth } from "../utils/context/authContext";
import EventsCard from '../components/EventsCard';

function Home() {
  // *set state for events
  const [events, setEvents] = useState([]);

  // *Get user ID using useAuth hook
  // const { user } = useAuth();

  // *function that makes the API call to get all events
  const getAllTheEvents = () => {
    getAllEvents().then(setEvents);
  };

  // *API call to get allEvents on component to render
  useEffect(() => {
    getAllTheEvents();
    console.warn(events);
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/events/new" passHref>
        <Button>Add A Event</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {events.map((event) => (
          <EventsCard key={event.id} eventsObj={event} onUpdate={getAllTheEvents} />
        ))}
      </div>
    </div>
  );
}

export default Home;
