const http = require('http')

// event-handler
function onRequest(request, response) {
   response.writeHead(200, {'Content-Type': 'text/html'});
   response.write('<h2>Hello Node.js!</h2>');
   response.end();
}

// membuat web server
const server = http.createServer()

// setiap terjadi event 'request', fungsi onRequest() akan dijalankan
server.on('request', onRequest);

// mendengarkan/menunggu terjadinya event pada port 3000
server.listen(3000);
