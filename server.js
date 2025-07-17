const http = require("http");
const PORT = 8080;
http
  .createServer((req, res) => {
    res.end("Hello from OpenShift Node.js!");
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
// This code creates a simple HTTP server using Node.js that listens on port 8080.
// When a request is received, it responds with the message "Hello from OpenShift Node.js
// !". The server is set to log a message to the console indicating that it is listening on the specified port.
// The server can be run in an OpenShift environment, which is a platform for deploying and managing applications in containers.
// The code uses the built-in 'http' module to create the server and handle requests.
