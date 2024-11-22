//Imported the built-in 'http' module from Node.js so that we can handle HTTP requests
//https://nodejs.org/docs/latest/api/http.html
var http = require('http');

// Getting the URL from the command-line arguments (third argument in process.argv array), process.argv explained in detail in filtered-ls.js with ref
var url = process.argv[2];

//Used the 'http.get' method to send a GET request to the specified URL  https://nodejs.org/docs/latest/api/http.html#http_http_get_options_callback
http.get(url, function(response) {

    // This converts the response from a Buffer to a readable string https://nodejs.org/docs/latest/api/stream.html#stream_readable_setencoding_encoding
  response.setEncoding('utf8');
  
  //The data event is emitted when a chunk of data is received
  //https://nodejs.org/docs/latest/api/stream.html#stream_event_data
  response.on('data', function(data) {
    console.log(data); // Printing each chunk of data to the console
  });
  //https://nodejs.org/docs/latest/api/stream.html#stream_event_error
  response.on('error', function(error) {
    console.error(error);   //printing the error msg on console
  });
}).on('error', function(error) {
  console.error(error);     //printing the error msg on console
});
