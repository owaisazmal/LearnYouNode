// Started from index 2 to skip 'node' and the script path
const args = process.argv.slice(2);

// In this case I am converting each argument to a number and calculating the sum
const sum = args.reduce((total, num) => total + Number(num), 0);

// Printing the result to the console
console.log(sum);
