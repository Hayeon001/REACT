let http = require("http");

let server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
    response.end("<H1>기본 서버입니다</H1>");
});

server.listen(4000, () => {
    //4000이 포트번호. 4000에서 기다리는중.
    console.log("server start http://127.0.0.1:4000");
});

//npm install nodemon
