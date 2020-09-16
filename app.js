const http = require("http");
const os = require("os");
const hostname = os.hostname();
const version = "v2";
const msg = version + " from: " + hostname;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    console.log(msg);
    res.write(msg);
    res.end();
  }
});

server.listen(3000);

console.log("listening on port 3000");
