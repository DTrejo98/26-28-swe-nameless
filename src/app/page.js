// import { useEffect, useState } from "react";
// import Link from 'next/link';
// import { getAllEvents } from "../api/eventData";

// function Home() {

// // *set state for events
// const [events, setEvents] = useState([]);

// // *Get user ID using useAuth hook
// const { user } = useAuth();

// // *function that makes the API call to get all events
// const getAllTheEvents = () => {
//   getAllEvents(user.id).then(setEvents);
// };

// // *API call to get allEvents on component to render
// useEffect(() =>{
//   getAllTheEvents();
// }, []);

//   return (
//     <div
//       className="text-center d-flex flex-column justify-content-center align-content-center"
//       style={{
//         height: '90vh',
//         padding: '30px',
//         maxWidth: '400px',
//         margin: '0 auto',
//       }}
//     >
//       Welcome to Next JS!
//     </div>
//   );
// }

// export default Home;
