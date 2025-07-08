import http from 'http';

const server = http.createServer((req, res) => {
  res.end('hello http server');
})
server.listen(1234);