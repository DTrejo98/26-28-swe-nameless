// 'use client';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation'
// import PropTypes from 'prop-types';
// import { useAuth } from '../utils/context/authContext';
// import { createEvent, updateEvents } from '../api/venueData';
// // clears out the form after the user submits the form
// const initialState = {
//   eventName: '',
//   venueName: '',
//   artist: '',
//   details: '',
//   ticketUrl: '',
//   ticketPrice: '',
//   imageUrl: '',
// };

// function EventForm({ obj=initialState}) {
//   const [formInput, setFormInput] = useState(obj);
// const [venues, setVenues] = useState([]);
// const router = useRouter();
// const { user } = useAuth();

// useEffect(() => {
//   getAllVenues(user.uid).then(setVenues);

// if (object.id) setFormInput(obj);
// }, [obj.user]);

// const handleChange = (e) => {
//   const { name, value } =e.target;
//   setFormInput((prevState) => ({
//     ...prevState,
//     [name]: value,
//   }));
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (obj.id) {
//     updateEvents(formInput).then(() => Router.push(`/events/${obj.id}`));
//   } else {
//     const payload = { ...formInput, uid: user.uid };
//     createEvent(payload).then(({ name }) => {
//       const patchPayload = { id: name };
//       updateEvents(patchPayload).then(() => {
//         router.push('/');
//       });
//     });
//   }
// };

// return (

// )
