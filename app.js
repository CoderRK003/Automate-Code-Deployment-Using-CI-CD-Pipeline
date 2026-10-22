const http = require('http');

// Request handler kept separate from server start so it can be tested easily
const handler = (req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 'ok' }));
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from nodejs-demo-app! CI/CD pipeline is working.\n');
};

module.exports = { handler, server: http.createServer(handler) };
