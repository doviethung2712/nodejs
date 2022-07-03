const { default: axios } = require("axios");

async function getAllUser() {
  let api = await axios.get("https://jsonplaceholder.typicode.com/users");
  return api.data;
}

getAllUser().then((result) => console.log(result));
