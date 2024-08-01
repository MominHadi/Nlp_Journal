var fs = require("fs");
var data = fs.readFileSync("Sunayyan.txt");
console.log("Synchronous read: " + data.toString()); 
console.log("Program Ended Successfully");
