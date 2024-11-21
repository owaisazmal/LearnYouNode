const fs = require('fs'); // Import the 'fs' (filesystem) module to interact with the file system (provides functionalities to work with the file system)
// Read the file path from the command-line arguments (process.argv[2])
//The full path to the file to read will be provided as the first command-line argument (i.e., process.argv[2]).
// Read the file path from the command-line arguments and read its contents synchronously
//https://nodejs.org/docs/latest/api/process.html#processargv
const fileBuffer = fs.readFileSync(process.argv[2]);


// Converted the Buffer into a string using .toString()
// Split the string by the newline character '\n' to get an array of lines
// The .split() method will create an array where each element is a line from the file
const lineCount = fileBuffer.toString().split('\n').length - 1; // Subtracted 1 from the array's length to calculate the number of newline characters, since .split() adds an extra element for the last line if it doesn't end with a newline.

// Print the number of newline characters to the console

console.log(lineCount);
