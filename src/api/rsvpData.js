import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllUserRsvps = (uid) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/rsvps/users/${uid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application.json',
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

const createRsvp = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/rsvps`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application.json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const deleteRsvp = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/rsvps/${id}`, {
      method: 'DELETE',
      headers: {
        'Conent-Type': 'application.json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export { createRsvp, deleteRsvp, getAllUserRsvps };
