const fs = require('fs'); // Import the 'fs' (filesystem) module to interact with the file system
// Read the file path from the command-line arguments (process.argv[2])
//The full path to the file to read will be provided as the first command-line argument (i.e., process.argv[2]).
// Read the file path from the command-line arguments and read its contents synchronously
const fileBuffer = fs.readFileSync(process.argv[2]);


// Convert the Buffer into a string using .toString()
// Split the string by the newline character '\n' to get an array of lines
// The .split() method will create an array where each element is a line from the file
const lineCount = fileBuffer.toString().split('\n').length - 1;

// Print the number of newline characters to the console

console.log(lineCount);
