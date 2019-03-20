const url = require("url");
const http = require("http");
const https = require("https");
const fs = require("fs");

const API_URL = "https://fineli.fi/fineli/api/v1/foods";
const CACHE_PATH = "./cache/";

const readFile = file => {
  return new Promise(resolve => {
    fs.readFile(file, function(err, buf) {
      if (buf) {
        resolve(buf.toString());
      }
      resolve("");
    });
  });
};

const writeFile = (filename, data) => {
  return new Promise(() => {
    fs.writeFile(filename, data, function(err) {
      if (err) console.error(err);
      console.log("Successfully Written to File.");
    });
  });
};

const fromCacheOrRequest = q => {
  return new Promise(async resolve => {
    const filename = `${CACHE_PATH}${q}.txt`;
    const fromCache = await readFile(filename);

    if (fromCache.length > 0) {
      return resolve(fromCache);
    }

    https.get(API_URL + "?q=" + q, response => {
      let data = "";
      response.on("data", chunk => (data += chunk));
      response.on("end", () => {
        writeFile(filename, data);
        resolve(data);
      });
    });
  });
};

//create a server object:
http
  .createServer(async (req, res) => {
    const { q } = url.parse(req.url, true).query;
    if (q) {
      const data = await fromCacheOrRequest(q);
      res.write(data);
    }
    res.end();
  })
  .listen(8080); //the server object listens on port 8080
