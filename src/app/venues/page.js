'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getAllUserVenues } from '../../api/venueData';
import { useAuth } from '../../utils/context/authContext';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import VenuesCard from '../../components/VenuesCard';

export default function VenuesPage() {
  // *set state for venues
  const [venues, setVenues] = useState([]);

  const { user } = useAuth();

  // function to get all venues
  const getAllTheVenues = () => {
    getAllUserVenues(user.uid).then(setVenues);
  };

  // make api call to get all venues
  useEffect(() => {
    getAllTheVenues();
  }, [user]);

  return (
    <div className="text-center my-4">
      <Link href="/venues/edit/new" passHref>
        <Button>Add Venue</Button>
      </Link>
      <div className="d-flex flex-wrap">{venues.length === 0 ? <h2>You have not created any venues</h2> : venues.map((venue) => <VenuesCard key={venue.id} venuesObj={venue} onUpdate={getAllTheVenues} />)}</div>
    </div>
  );
}
