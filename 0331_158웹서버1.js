//http 객체
/*
    request - response
*/

let http = require("http");
http.createServer((request, response) => {
    response.writeHead(200, { "Content-type": "text/html" });
    response.end("<H1>Hello my first Webserver</H1>");
}).listen(3000, () => {  //3000이 포트번호. 3000에서 기다리는중. 
    console.log("server start http://127.0.0.1:3000");
});

//실행할땐 터미널에
//node js파일명
//안되면  //npm install node  //다운받고 다시 실행
//server start http://127.0.0.1:3000 나오면 //컨트롤 링크클릭
//서버 끝내기 ctrl + c
//1회용

//npm install nodemon