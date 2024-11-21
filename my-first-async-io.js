const fs = require('fs');

// To retrieve the file path from the third command-line argument (process.argv[2])
const filePath = process.argv[2];

//https://nodejs.org/docs/latest/api/fs.html#fsreadfilepath-options-callback
//Asynchronously reads the entire contents of a file.
fs.readFile(filePath, (err, data) => {
    //Did some error handling with err (for example if the file didn't occur)
    // If no error occurs, 'err' will be null, and 'data' will contain the file content as a Buffer object.
    //https://nodejs.org/docs/latest/api/errors.html#class-error
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
    //Convert the Buffer object (binary data) into a readable string using the .toString() method.
    const lineCount = data.toString().split('\n').length - 1;
    console.log(lineCount);//print
  });