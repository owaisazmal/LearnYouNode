//https://nodejs.org/docs/latest/api/modules.html#modules-exports
var mymodule = require('./mymodule'); // Import the module which was asked to create in the terminal/problem

//https://nodejs.org/docs/latest/api/process.html#processargv
//Explained in (filtered-ls.js)
var dir = process.argv[2]; // Directory search
var filterStr = process.argv[3]; // File extension to filter by

// Calling the function exportd by the module we created for the challenge
// The function is taking three arguments: 'dir': The directory that it shoudl read, 'filterStr': The file extension to filter by, 'callback': A callback function so that it can  handle the results or any error
mymodule(dir, filterStr, function(err, files) {
  if (err) {
    return console.log('Error:', err);
  }
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  files.forEach(function(file) {
    console.log(file); // Print each file
  });
});