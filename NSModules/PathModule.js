


const path = require('path')

//seperator
console.log(path.sep);

//to create correct path
const filePath = path.join('/content', '//subfolder/', 'test.txt')

console.log(filePath);


//get file path base name "file name"
console.log(path.basename(filePath));

//absolute path .. "Full path with base directoory"
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);

