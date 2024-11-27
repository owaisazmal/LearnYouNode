var http = require('http');     //Explained in http-client challenge
var url = require('url');       //Load the 'url' module to help with parsing URLs.     https://nodejs.org/api/url.html

var server = http.createServer(function(request, response) {        //Created an HTTP server that listens for requests.
  var fullUrl = new URL(request.url, 'http://example.com'); //the base URL 'http://example.com' is used here only to comply with the new URL API which requires an absolute URL.
  var path = fullUrl.pathname;  //Extract the pathname component of the URL which dictates the API endpoint.

  var time = fullUrl.searchParams.get('iso');       //extracting the 'iso' parameter from the query string

  if (path === '/api/parsetime') {  // Handle /api/parsetime endpoint: parse the time into a JSON object with hour, minute, and second.
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    var date = new Date(time);
    var timeObject = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(timeObject));
  } else if (path === '/api/unixtime') {        // Handles /api/unixtime endpoint
    var date = new Date(time);
    var unixTime = {
      unixtime: date.getTime()
    };
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(unixTime));
  } else {      // Handles all other paths with a 404 Not Found error.
    response.writeHead(404);
    response.end();
  }
});
// Starts the server listening on a port provided by the second command line argument.       https://nodejs.org/api/http.html#serverlisten
server.listen(Number(process.argv[2]));
