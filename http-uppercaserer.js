var http = require('http');     //Explained in http-client challenge

var map = require('through2-map');      //'through2-map' module, which is a wrapper around 'through2' that works like Array#map but for streams  https://www.npmjs.com/package/through2-map
//also need to instal the  dep. ~ npm install through2-map

var server = http.createServer(function (request, response) {       // Created an HTTP servr that listens for requests
  if (request.method != 'POST') {       // Checking if the incoming request is a POST request. If not, end the response with a message
    return response.end('send me a POST\n');
  }

  var transformStream = map(function (chunk) {  //Create a transform stream using through2-map that takes each chunk of data

    return chunk.toString().toUpperCase(); //converts it to a string, and transforms it to uppercase.

  });

  request.pipe(transformStream).pipe(response); //Pipe the incoming POST data through the transform stream and then back to the response.
});

server.listen(Number(process.argv[2]));     //Start the server listening on a port provided by the second command line argument.
