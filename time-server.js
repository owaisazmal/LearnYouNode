const net = require('net'); // Importing the built-in 'net' module to create TCP servers and clients.  https://nodejs.org/docs/latest/api/net.html#net
const port = process.argv[2];  //Getting the port number from the command-line arguments.


// created a helper function to formar numbers less than 10 with a leading zero.
function formatNumber(number) {
  if (number < 10) {
    return '0' + number;        // Adding a leading zero to single-digit numbers.
  }
  return number.toString();     //Converting the number to string.
}

// Function to generate the current date and time in the required format: "YYYY-MM-DD HH:mm".
function getCurrentTime() {
  const date = new Date();      //Creates a new Date Object representing the current time.
  return date.getFullYear() + '-' +     //Full year
    formatNumber(date.getMonth() + 1) + '-' +   //Months
    formatNumber(date.getDate()) + ' ' +        //day of the month
    formatNumber(date.getHours()) + ':' +       //hour
    formatNumber(date.getMinutes());            //minutes
}
//Created a TCP server using the 'net' module https://nodejs.org/docs/latest/api/net.html#net_net_createserver_options_connectionlistener
const server = net.createServer(function (socket) {     //From Hint
  socket.on('data', function (data) {       //Event listener for when data is received from a client. https://nodejs.org/docs/latest/api/net.html#net_event_data
    console.log('Received:', data.toString());      //Logging the received data.
  });
});
server.listen(port);        //https://nodejs.org/docs/latest/api/net.html#net_server_listen  (This function is asynchronous. When the server starts listening, the 'listening' event will be emitted.)

const client = net.Socket();        //https://nodejs.org/docs/latest/api/net.html#net_class_net_socket (Created a TCP client using the 'net' module to connect to the server.)
client.connect(port, function () {  //https://nodejs.org/docs/latest/api/net.html#net_socket_connect (Connecting the client to the server on the specified port.)
  client.end(getCurrentTime() + '\n');      // Close the connection after sending data.
});
