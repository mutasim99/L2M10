const path = require('path');

console.log('current file info: \n');
console.log('fileName:', __filename);
console.log('Directory',__dirname);

console.log('\n' + '-'.repeat(50) + '\n');

const filePath = "/Mutasim/documents/nextLevel.pdf";

console.log("analyzing Path :", filePath, "\n");
console.log('Directory:', path.dirname(filePath));
console.log('BaseName:', path.basename(filePath));
console.log('file extension:', path.extname(filePath));
console.log('file name:', path.basename(filePath, path.extname(filePath)));


console.log("\n" + "-".repeat(50) + "\n");

const parsed = path.parse(filePath);
console.log('parsed object:', parsed);

console.log("\n" + "-".repeat(50) + "\n");

const formattedPath = path.format(parsed);
console.log('formattedPath:', formattedPath);