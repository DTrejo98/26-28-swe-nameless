import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllEvents = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/events`, {
      method: 'GET',
      header: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export default getAllEvents;
