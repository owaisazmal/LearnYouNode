var http = require('http'); //explained in HTTP collect challenge
var bl = require('bl'); //explained in HTTP collect challenge

var results = [];   //Initializing an array to store the results from the three URLs.
var count = 0;      //will help us to count track of how many requests have been completed

//Function that prints the results in order after all three HTTP requests have completed.
function printResults() {
  console.log(results[0]);  //first URL
  console.log(results[1]);  //2nd URL
  console.log(results[2]);  //3rd URL
}
//Function that helps to handle HTTP requests and store the response data for a given index.
function getData(index) {
    //Sending an HTTP GET request to the URL specified at `process.argv[2 + index]`.    https://nodejs.org/docs/latest/api/http.html#http_http_get_options_callback
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {     // Piping the response stream into the `bl` module to accumulate the data.  https://nodejs.org/docs/latest/api/stream.html#stream_readable_pipe_destination_options
      if (err) {        //err handling
        console.log('Error:', err);     // loging the error to the console.
        return; //exit
      }

      results[index] = data.toString();     //Converting the buffered data into a string and store it in the results array at the specified index. https://nodejs.org/docs/latest/api/buffer.html#buffer_buf_tostring_encoding_start_end
      
      count++;

      if (count === 3) {    // If all three requests have completed (count === 3), print the results in order.

        printResults();

      }
    }));
  });
}

getData(0);     //1st url (index 0)
getData(1);     //2nd url   
getData(2);     //3rd url
