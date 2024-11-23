var http = require('http');//explained in http-client.js

// Imported the 'bl' (Buffer List) module, a third-party library for managing buffers (mentioned in Hints)
//Buffer List: collect buffers and access with a standard readable Buffer interface, streamable too!
//https://github.com/rvagg/bl
var bl = require('bl');

// Used 'http.get' to send a GET request to the URL provided as a command-line argument
// Process.argv[2] relation explained in http-client.js
//https://nodejs.org/docs/latest/api/process.html#processargv
http.get(process.argv[2], function(response) {
    //The 'pipe' method connects the response stream to the buffer list module
    //https://nodejs.org/docs/latest/api/stream.html#stream_readable_pipe_destination_options
  response.pipe(bl(function(err, data) {
    if (err) {  //error handling
      console.error(err);
      return;
    }
    //Convert the accumulated binary data into a string https://nodejs.org/docs/latest/api/buffer.html#buffer_buf_tostring_encoding_start_end
    var text = data.toString();
    console.log(text.length);
    console.log(text);
  }));
});
