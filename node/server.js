const http = require('http');
const PORT = 3000;
const ROOT = '/';
const ROUTE_1 = '/getNumTimesCalledMainRoute';
const ROUTE_2 = '/getNumTimesCalled2ndRoute';

let numTimesCalled = 0;

const server = http.createServer((req, res) => {
  res.writeHead(200);

  if (req.url === ROUTE_1 || req.url === ROUTE_2) {
    numTimesCalled++;
    res.write('Node server has received ' + numTimesCalled + ' request(s) in total at ' + req.url);
  } else if (req.url === ROOT) {
    res.write(
      `You have reached the root route! Hello there. Try these routes: ${ROUTE_1} or ${ROUTE_2}`
    );
  }
  res.end();
});

server.listen(PORT);

console.log(`Your node server listening at ${PORT} has started!`);
