const fs = require('fs')
const path = require('path')

//creating folder

// fs.mkdir(path.join(__dirname, '/test'), {}, (err) =>{
//     if(err) throw err;
//     console.log('folder created')
// })

//create and write file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello world', (err) =>{
//     if(err) throw err;
//     console.log('folder written too')

//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' i love node js', (err) =>{
//         if(err) throw err;
//         console.log('folder written too')
//     })
// })

// Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) =>{
//         if(err) throw err;
//         console.log('data')
//     })

    //Rename file

    fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloWorld.txt'), (err) =>{
        if(err) throw err;
        console.log('File renamed.....')
    })
