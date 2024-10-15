// 'use client'

// import React, { useState } from 'react';
// import { useAuth } from '../utils/context/authContext';

// const initialState = {
//   name: '',
//   address: '',
//   city: '',
//   state: '',
// };

// export default function VenueForm({ obj = initialState, func }) {
//   const { user } = useAuth();
//   const [venueDetials, setVenueDetails] = useState(obj);

//   const resetForm = () => {
//     setVenueDetails(initialState);

//     const handleSubmit = async (e) => {
//       e.preventDefault();

//     }
//   }

// return (
//   <form className="container" onSubmit={handleSubmit}>
//     <div>
//       <label htmlFor="name">Venue Name</label>
//       <input onChange={handleInputUpdate} type="text" name="name" id="name" className="form-control" value={factDetails.text} required />
//     </div>
//     <div>
//       <label htmlFor="text">Address</label>
//       <input onChange={handleInputUpdate} type="text" name="address" id="address" className="form-control" value={factDetails.name} />
//     </div>
//     <div>
//       <label htmlFor="text">City</label>
//       <input onChange={handleInputUpdate} type="text" name="city" id="city" className="form-control" value={factDetails.name} />
//     </div>
//     <div>
//       <label htmlFor="text">State</label>
//       <input onChange={handleInputUpdate} type="text" name="state" id="state" className="form-control" value={factDetails.name} />
//     </div>
//     <button className="btn btn-success" type="submit">
//       Add/Update
//     </button>
//   </form>
// );
// }
