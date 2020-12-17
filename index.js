let http = require('http');
let finalhadnler = require('finalhandler');
let Router = require('router');

let server = http.createServer(function(request, respose) {
    Router(request, response)
})

server.listen(3000, function() {
    console.log('sudah ok')
})