
const {readFile, writeFile} = require('fs')

console.log("First Job starting");

readFile('./content/firstFile.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    

    writeFile('./content/resultToFile.txt', `The result is ${result}`, (err, result) => {
        if(err){
        console.log(err);
        return;
    }
    console.log(result);
    console.log("First Job finished");
    
    })
})

console.log("Second job started");
