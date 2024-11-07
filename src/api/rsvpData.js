import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllUserRsvps = (uid) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/rsvps/${uid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          resolve(Object.values(data));
        } else {
          resolve([]);
        }
      })
      .catch(reject);
  });

const getSingleUserRsvp = (uid, eventId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/rsvps/${uid}/${eventId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => resolve(data))
      .catch(reject);
  });

const createRsvp = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/rsvps`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const deleteRsvp = (uid, eventId) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/rsvps/${uid}/${eventId}`, {
      method: 'DELETE',
      headers: {
        'Conent-Type': 'application/json',
      },
    })
      .then((data) => resolve(data))
      .catch(reject);
  });

export { createRsvp, deleteRsvp, getAllUserRsvps, getSingleUserRsvp };
