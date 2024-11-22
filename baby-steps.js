var result = 0; //initializing var to 0 so we can increment it later on

// `process.argv` is an array containing command-line arguments passed to the Node.js process.
// https://nodejs.org/docs/latest/api/process.html#processargv
// started a loop from the third command-line argument (index 2) as required
// because the first two elements in `process.argv` are the Node.js path and the script file path.
for (var i = 2; i < process.argv.length; i++) {
  // converted the current argument from a string to a number
  // and add it to the `result`.
  //https://nodejs.org/docs/latest/api/process.html#processargv
  result += Number(process.argv[i]);
}

// Finally,printed the total sum to the console.
console.log(result);
