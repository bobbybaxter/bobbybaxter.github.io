import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getInterests = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/interests.json`)
    .then((resp) => {
      const interestResults = resp.data;
      const interests = [];
      Object.keys(interestResults).forEach((interestId) => {
        interestResults[interestId].id = interestId;
        interests.push(interestResults[interestId]);
      });
      resolve(interests);
    })
    .catch(err => reject(err));
});

export default { getInterests };
