import axios from 'axios';

const getGoats = () => new Promise((resolve, reject) => {
  axios
    .get('https://fir-cows-958ae.firebaseio.com/react-goats.json')
    .then((response) => {
      const goatData = response.data;
      const goats = [];
      if (goatData) {
        Object.keys(goatData).forEach((goatId) => {
          goats.push(goatData[goatId]);
        });
      }
      resolve(goats);
    })
    .catch((error) => reject(error));
});

export default getGoats;
