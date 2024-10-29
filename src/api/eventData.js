import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllEvents = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/events`, {
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

const getAllUserEvents = (uid) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/events/users/${uid}`, {
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

const getSingleEvent = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/events/${id}`, {
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

const createEvent = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/events`, {
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

const updateEvents = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/events/${payload.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const deleteEvent = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/events/${id}`, {
      method: 'DELETE',
      headers: {
        'Conent-Type': 'application/json',
      },
    })
      // .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getAllEvents, getAllUserEvents, getSingleEvent, createEvent, deleteEvent, updateEvents };
