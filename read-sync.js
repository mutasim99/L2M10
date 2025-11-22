const fs = require('fs');

console.log('start reading');
try {
    const data = fs.readFileSync('./data/dairy.txt', 'utf-8');
    console.log(data);
} catch (error) {
    console.error('error happen:', error.message);
}

console.log('worked finished')