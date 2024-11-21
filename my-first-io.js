const fs = require('fs');

// Read the file path from the command-line arguments and read its contents synchronously
const fileBuffer = fs.readFileSync(process.argv[2]);


// Convert the Buffer to a string, split it into lines using '\n', and count the number of lines
const lineCount = fileBuffer.toString().split('\n').length - 1;

// Print the number of newline characters to the console

console.log(lineCount);
