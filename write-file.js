const fs = require('fs');

// const content1 = ' this is a content \n node is awesome';

// try {
//     fs.writeFileSync('./output/test-sync.txt', content1);
//     console.log('file written sync');
// } catch (error) {
//     console.error(error.message)
// };


const content2 = ' this is another file \n this file is written as asynchronous';

fs.writeFile('./output/test-async.txt', content2, (error)=>{
    if (error) {
        console.log(error.message);
    }else{
        console.log('async file written');
    }
})
