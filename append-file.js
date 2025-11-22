const fs = require('fs');


// fs.writeFileSync("./output/app.log", "Application Started\n");
// console.log("file created");

// const logEntry1 = `\n ${new Date().toLocaleString()}, user loggedIn`;
// fs.appendFileSync('./output/app.log', logEntry1);

const logEntry2 = `\n ${new Date().toLocaleString()}, data fetching`;

fs.appendFileSync('./output/app.log', logEntry2);

console.log('task completed');
