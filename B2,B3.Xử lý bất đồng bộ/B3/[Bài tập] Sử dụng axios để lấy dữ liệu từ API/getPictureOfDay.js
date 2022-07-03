axios = require("axios");

function getPictureOfDay() {
  return new Promise((resolve) => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((json) => resolve(json.data));
  });
}

getPictureOfDay().then((result) => console.log(result));
