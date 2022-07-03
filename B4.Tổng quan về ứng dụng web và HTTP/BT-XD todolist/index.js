const http = require("http");
const fs = require("fs");
const qs = require("qs");

let arr = [];
const ser = http.createServer((req, res) => {
  if (req.method === "GET") {
    fs.readFile("./views/todo.html", "utf8", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => {
      const todo = qs.parse(data);
      fs.readFile("./views/display.html", "utf8", (err, html) => {
        if (err) {
          console.log(err);
        }
        arr.push(todo.name);
        html = html.replace("{name}", arr[i] + "</br>");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(html);
        res.end();
      });

      console.log(arr);
    });
    req.on("error", () => {
      console.log("error");
    });
  }
});

ser.listen(8080, () => {
  console.log("server running at http://localhost:8080");
});
