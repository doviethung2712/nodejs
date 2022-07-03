axios = require("axios");

async function getJSONAPI() {
  let api = await axios.get("http://jsonplaceholder.typicode.com/posts/1");
  return api.data;
}

getJSONAPI().then((result) => console.log(result));
