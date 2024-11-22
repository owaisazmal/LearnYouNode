const fs = require('fs'); //explained in my-first-io.js
const path = require('path'); //explained in filtered challenge


// Exporting the function using module.exports to make it available for us to use it in makeitmodular.
//https://nodejs.org/docs/latest/api/modules.html#modules-exports
module.exports = function(dir, filterStr, callback) {
  fs.readdir(dir, (err, files) => {

    if (err) return callback(err); // If there is an error reading the directory, pass the error to the callback.

    // Use the filter() method to create a new array that contains only the files
    // Filter files by extension, path.extname(file) returns the file extension (e.g., '.txt'), compared it to '.' + filterStr to match files with the desired extension.
    const result = files.filter(file => path.extname(file) === '.' + filterStr);

    callback(null, result); // After filtering the files, call the callback with null as the firsy argument (no err),
  });
};
