const url = require("url");
const http = require("http");
const https = require("https");

const API_URL = "https://fineli.fi/fineli/api/v1/foods";

//create a server object:
http
  .createServer(function(req, res) {
    const { q } = url.parse(req.url, true).query;
    if (q) {
      https.get(API_URL + "?q=" + q, response => {
        let data = "";
        response.on("data", chunk => (data += chunk));
        response.on("end", () => {
          res.write(data);
          res.end();
        });
      });
    } else {
      res.end();
    }
  })
  .listen(8080); //the server object listens on port 8080
