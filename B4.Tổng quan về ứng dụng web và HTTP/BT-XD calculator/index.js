const http = require("http");
const fs = require("fs");
const qs = require("qs");

http
  .createServer((req, res) => {
    if (req.method === "GET") {
      fs.readFile("./view/calculator.html", "utf8", (err, data) => {
        res.write(data);
        return res.end();
      });
    } else {
      let data = "";
      req.on("data", (chunk) => (data += chunk));
      req.on("end", () => {
        const number = qs.parse(data);
        fs.readFile("./view/calculator.html", "utf8", (err, html) => {
          if (err) {
            console.log(err);
          }
          switch (number.calculation) {
            case "+":
              html = html.replace(
                "{result}",
                parseInt(number.a) + parseInt(number.b)
              );
              break;
            case "-":
              html = html.replace(
                "{result}",
                parseInt(number.a) - parseInt(number.b)
              );
              break;
            case "*":
              html = html.replace(
                "{result}",
                parseInt(number.a) * parseInt(number.b)
              );
              break;
            case "/":
              if (parseInt(number.b) == 0) {
                html = html.replace("{result}", "So bi chia khong the bang 0");
              }
              html = html.replace(
                "{result}",
                parseInt(number.a) / parseInt(number.b)
              );
          }
          res.write(html);
          return res.end();
        });
      });
      req.on("error", () => {
        console.log("error");
      });
    }
  })
  .listen(8080, () => {
    console.log("server running http://localhost:8080");
  });
