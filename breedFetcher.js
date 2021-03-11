const request = require('request');

const fetchBreedDescription = function(breed, doneCallback) {
  const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(URL, (error, response, body) => {
    if (!error) {
      if (body.length < 3) {
        doneCallback(null, "Breed not found");
      } else if (response.statusCode !== 200) {
        doneCallback(null, `Could not connect: ${response.statusCode}`)
      } else {
        const data = JSON.parse(body);
        doneCallback(null, data[0].description);
      }
    } else {
      doneCallback(`Error: ${error.message}`, null);
    }
  });
};

module.exports = {
  fetchBreedDescription
};
