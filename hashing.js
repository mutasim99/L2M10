const crypto = require('crypto');

console.log("\n MD5 Hash: ");

const md5Hash = crypto.createHash('md5').update('Mm442880').digest('hex');
const md5Hash2 = crypto.createHash('md5').update('Mm442880').digest('hex');

console.log('md5hash',md5Hash);
console.log('md5hash2',md5Hash2);

console.log("-".repeat(50));
console.log("\n crypto Hash256: ");
const sha256Hash = crypto.createHash('sha256').update('Mm442880').digest('hex');

const sha256Hash2 = crypto.createHash('sha256').update('sha256').digest('hex')

console.log('sha256Hash', sha256Hash);
console.log('sha256Hash2', sha256Hash2);

console.log("-".repeat(50));
console.log("\n crypto Hash512: ");

const sha512Hash = crypto.createHash('sha512').update('Mm442880').digest('hex');
const sha512Hash2 = crypto.createHash('sha512').update('Mm442880').digest('hex');

console.log('sha512Hash: ', sha512Hash);
console.log('sha512Has2: ', sha512Hash2);
