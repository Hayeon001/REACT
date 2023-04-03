//ejs엔진과 결합

var express = require("express");
var app = express(); //서버 만들었음
var fs = require("fs");

//app.set("view engine", ejs); //내부변수에 값을 설정
app.use(express.urlencoded({ extended: false })); //미들웨어 사용

app.get("/", (request, response) => {
    fs.readFile("html/index.html", "utf-8", (error, data) => {
        response.send(data.toString());
    });
});

app.use((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<H1>Express</H1>");
});

app.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
});
