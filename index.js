// const Person = require('./person')
// // console.log(person)

// const person1 = new Person('John doe', 30)

// person1.greeting();


// const Logger  = require('./logger')

// const logger = new Logger();

// logger.on('message', (data) => console.log('Called Listener', data))
// logger.log('hello world')

const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    // console.log(req.url)
    if(req.url === '/'){
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('<h1>HomePage</h1>')
    }
})

const PORT  =  process.env.PORT || 5000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))