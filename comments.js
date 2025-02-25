// Create web server
// Create a web server that listens for requests on port 3000. When a request is received, the server should respond with the contents of the file comments.html.
// Use the fs module to read the file and the http module to create the server.

const http = require('http');
const fs = require('fs');
const port = 3000;

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('comments.html', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write('File not found!');
    } else {
      res.write(data);
    }
    res.end();
  });
}).listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


