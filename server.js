const http = require("http");
const fs = require("fs");

const myserver =http.createServer((req, res)=>{
    const log = `${Date.now()}: ${req.url} New Request Recieved\n`;
    fs.appendFile("log.txt",log, (err, data)=>{
        
        switch(req.url){
            case`/`: res.end("Home Page");
            break
            case`/about`: res.end("I am Mukul P.");
            default: res.end("No valid URL");
        }
        
    })
    
});

myserver.listen(8000, () => console.log("Server Started "));     