const fs = require('fs');

let data = 'Hi this is my new page';

fs.writeFile('./textfile', data, (err, data) => {
    if (err) {
        console.log(err)
    }
    let fileData = fs.readFile('./textfile', 'utf-8', (err, data) => {
        console.log(data, err);
    });

})