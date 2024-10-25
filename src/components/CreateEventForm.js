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
//         router.push('/events/');
//       });
//     });
//   }
// };

// return (
/* <Form onSubmit={handleSubmit} className="text-black">
 <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Event</h2>

 <FloatingLabel controlId="floatingInput1" label="Event Name" className="mb-3">
    <Form.Control type="text" placeholder="Event Name" name="eventName" value={formInput.eventName} onChange={handleChange} required />
  </FloatingLabel>

  <FloatingLabel controlId="floatingSelect" label="Venue Name">
    <Form.Select aria-label="Venue" name="venue_id" onChange={handleChange} className="mb-3" value={formInput.venue_id || ''} required>
      <option value="">Select a Venue</option>
      {venues.map((venue) => (
        <option key={venue.id} value={venue.id}>
          {venue.name} {venue.city}
        </option>
      ))}
    </Form.Select>
  </FloatingLabel>

  <FloatingLabel controlId="floatingInput2" label="Artist Name" className="mb-3">
    <Form.Control type="text" placeholder="Artist Name" name="artistName" value={formInput.artist} onChange={handleChange} required />
  </FloatingLabel> 

  <FloatingLabel controlId="floatingTextarea" label="Details" className="mb-3">
    <Form.Control as="textarea" placeholder="Details" style={{ height: '100px' }} name="details" value={formInput.details} onChange={handleChange} required />
  </FloatingLabel>

  <FloatingLabel controlId="floatingInput3" label="Ticket URL" className="mb-3">
    <Form.Control type="url" placeholder="Enter a ticket URL link" name="ticketUrl" value={formInput.ticketUrl} onChange={handleChange} required />
  </FloatingLabel>

  <FloatingLabel controlId="floatingInput4" label="Ticket Price" className="mb-3">
    <Form.Control type="text" placeholder="Ticket price" name="price" value={formInput.price} onChange={handleChange} required />
  </FloatingLabel>
  
  <FloatingLabel controlId="floatingInput5" label="Venue Image" className="mb-3">
    <Form.Control type="url" placeholder="Enter a venue image url" name="image" value={formInput.image} onChange={handleChange} required />
  </FloatingLabel>

{/* SUBMIT BUTTON  */ /* <Button type="submit">{obj.id ? 'Update' : 'Create'} Event</Button>
</Form>
);
} */
// )
// EventForm.propTypes = {
//   obj: PropTypes.shape({
//     eventName: PropTypes.string,
//     venueName: PropTypes.string,
//     artist: PropTypes.string,
//     details: PropTypes.string,
//     ticketUrl: PropTypes.string,
//     ticketPrice: PropTypes.string,
//     imageUrl: PropTypes.string,
//  id: PropTypes.number,
//   }),
// };

// export default EventForm;
