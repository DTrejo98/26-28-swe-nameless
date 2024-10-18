// import React from 'react'
// import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/card';
// import Card from 'react-bootstrap/card';
// import { Link } from 'react-bootstrap/lib/Navbar';
// // import { deleteEvent } from '../api/venueData';

// function eventsCard({ eventsObj, onUpdate }) {

//     // * for deleteing events
//     const deleteEvent = () => {
//         if (window.confirm(`Delete ${eventsObj.title}?`)) {
//             deleteEvent(eventsObj.id).then(() => onUpdate());
//         }
//     };

//     return (
//         <Card style={{ width: '18rem', margin: '10px' }}>
//         {/* <Card.Img variant="top" src={bookObj.image} alt={venuesObj.title} style={{ height: '400px' }} /> */}
//         <Card.Body>
//           <Card.Title>{eventsObj.title}</Card.Title>
//           <p className="card-text bold">
//             {/* {bookObj.sale && (
//               <span>
//                 SALE
//                 <br />
//               </span>
//             )}{' '} */}
//             ${eventsObj.artist}
//             ${eventsObj.venue}
//             ${eventsObj.city}
//           </p>
//           {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS
//           <Link href={`/book/${bookObj.firebaseKey}`} passHref>
//             <Button variant="primary" className="m-2">
//               VIEW
//             </Button>
//           </Link> */}
//           {/* DYNAMIC LINK TO EDIT THE events DETAILS  */}
//           <Link href={`/events/edit/${eventsObj.id}`} passHref>
//             <Button variant="info">EDIT</Button>
//           </Link>
//           <Button variant="danger" onClick={deleteThisEvent} className="m-2">
//             DELETE
//           </Button>
//         </Card.Body>
//       </Card>
//     );
//   }

//   EventsCard.propTypes = {
//     eventsObj: PropTypes.shape({
//         title: PropTypes.string,
//         artist: PropTypes.string,
//         venue: PropTypes.string,
//         city: PropTypes.string,
//         id: PropTypes.string,
//      }).isRequired,
//      onUpdate: PropTypes.func.isRequired,
//   };

// export default eventsCard;
