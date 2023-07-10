const { write } = require('fs')
const http = require('http')
console.log(http)
const PORT = 3000

const server = http.createServer((req, res)=>{
    res(write)
})