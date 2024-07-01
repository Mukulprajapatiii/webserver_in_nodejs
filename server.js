const http = require("http");

const myserver =http.createServer((req, res)=>{
    console.log("new req created :)");
    res.end("Hello from server");
});

myserver.listen(8000, () => console.log("Server Started "))