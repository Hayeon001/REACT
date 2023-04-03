//jade로 서버 만들기

let http = require("http");
let fs = require("fs");
let jade = require("jade");

let server = http.createServer((request, response) => {
    fs.readFile("./html/test1.jade", "utf-8", (error, data) => {
        let fn = jade.compile(data);

        response.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
        //response.end(data); //파일 내용을 브라우저로 보낸다 //여기에 ejs함수 추가
        response.end(fn({ name: "jade" }));
    });
});

server.listen(4000, () => {
    //4000이 포트번호. 4000에서 기다리는중.
    console.log("server start http://127.0.0.1:4000");
});
