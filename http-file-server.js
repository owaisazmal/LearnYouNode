var http = require('http'); //explained in HTTP collect challenge

var fs = require('fs');     //explained in filtered-ls challenge


//Created an HTTP server. The function passed to createServer is called once for each HTTP request made to the server.      https://nodejs.org/api/http.html#httpcreateserveroptions-requestlistener
var makeServer = http.createServer(function (request, response) {

    response.writeHead(200, { 'content-type': 'text/plain' });        //Writing the HTTP header with a status code of 200 (OK) and setting the content-type to 'text/plain'

  var fileStream = fs.createReadStream(process.argv[3]);    // This method reads data from a file asynchronously, without loading the file into memory completely.  https://nodejs.org/api/fs.html#filehandlecreatereadstreamoptions

  fileStream.pipe(response);         // Pipe the read stream to the response.   https://nodejs.org/api/stream.html#streamreadablepipeDestination-options
});


makeServer.listen(Number(process.argv[2]));     //the Number() function converts the command line argument to a number type     https://nodejs.org/api/http.html#serverlisten
