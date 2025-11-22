const fs = require('fs');

console.log('start reading');

fs.readFile('./data/dairy.txt', 'utf-8', (error, data) => {
    if (error) {
        console.error('error:', error.message)
    };
    console.log(data);
});

console.log('This run immediately==> no blocking');