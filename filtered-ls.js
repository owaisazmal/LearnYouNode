var fs = require('fs');

// Import the 'path' module to work with and manipulate file paths.
// https://nodejs.org/docs/latest/api/path.html
var path = require('path');


// Reading the directory path (first argument) and file extension (second argument) from the command-line arguments.
// process.argv[3] is the file extension (e.g., 'txt'), and we prefix it with a '.' to match file extensions.
var folder = process.argv[2]; //first

var ext = '.' + process.argv[3]; //seconf


// Used the asynchronous method 'fs.readdir' to read the contents of the specified directory.
// https://nodejs.org/docs/latest/api/fs.html#fsreaddirpath-options-callback
fs.readdir(folder, function (err, files) {
  if (err) { //error handling
    console.log('Error:', err);
    return;
  }
// Iteratint through the list of files in the directory.
// Used 'path.extname' to extract the file extension of each file.
// Compared it with the user-specified  extension.
// https://nodejs.org/docs/latest/api/path.html#pathextnamepath
  for (var i = 0; i < files.length; i++) {

    if (path.extname(files[i]) === ext) {
      console.log(files[i]);
    }
  }
});
