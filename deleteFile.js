
const fs = require("fs");

let myFilePath = 'Sunayyan2.txt';


fs.unlink(myFilePath, function () {
    console.log("Deletion Complete Succesfully.");
});
