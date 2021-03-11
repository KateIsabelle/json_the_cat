const request = require('request');
const arg = process.argv.slice(2);
const breedName = arg[0];
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(URL, (error, response, body) => {
  if (error) {
    console.log(error.message);
  } else if (response.statusCode !== 200) {
    console.log(response.statusCode);
  } else if (body.length < 3) {
    console.log("I could not find that breed name.");
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});


