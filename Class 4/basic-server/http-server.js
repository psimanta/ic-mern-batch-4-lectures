// http
const http = require("http");

const PORT = 8080;

// Methods: GET, POST, PATCH, DELETE
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    if (req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home Page");
    }
  } else if (req.url === "/api/users") {
    if (req.method === "GET") {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ users: [] }));
    } else if (req.method === "POST") {
    }
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}!`);
});
