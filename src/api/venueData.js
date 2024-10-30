import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllVenues = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/venues`, {
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

const getAllUserVenues = (uid) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/venues/users/${uid}`, {
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

const getSingleVenue = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/venues/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const createVenue = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/venues`, {
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

const updateVenues = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/venues/${payload.id}`, {
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

const deleteVenue = (id) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/venues/${id}`, {
      method: 'DELETE',
      headers: {
        'Conent-Type': 'application/json',
      },
    })
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getAllVenues, getAllUserVenues, getSingleVenue, createVenue, updateVenues, deleteVenue };
