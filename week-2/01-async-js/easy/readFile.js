const fs = require('fs');

let fileData = fs.readFile('./textfile', 'utf-8', (err, data) => {
    console.log(data, err);
});
console.log(fileData)

console.log("final console")