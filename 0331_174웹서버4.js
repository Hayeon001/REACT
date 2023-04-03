let http = require("http");
let fs = require("fs"); // 파일읽기
let url = require("url"); //url분석을 위한 라이브러리

//http://127.0.0.1:4000/add?x=4&y=5
//http://127.0.0.1:4000/sub?x=4&y=5
//http://127.0.0.1:4000/userinfo?userid=test&username=Tom

let server = http.createServer((request, response) => {
    //console.log(request);  //엄청 많이 출력됨
    //console.log(request.url); //전송 url
    console.log(request.method); //전송방식

    let rurl = request.url;
    let pathname = url.parse(rurl, true).pathname; //add
    let query = url.parse(rurl, true).query;
    //string 분석 -> json객체로 전환
    //파싱한다
    console.log(query);
    console.log(pathname);
    console.log(typeof query);

    if (pathname == "/add") {
        response.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
        let x = parseInt(query.x);
        let y = parseInt(query.y);
        let z = x + y;
        response.end(`${x} + ${y} = ${z}`);
    } else if (pathname == "/sub") {
        response.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
        let x = parseInt(query.x);
        let y = parseInt(query.y);
        let z = x - y;
        response.end(`${x} - ${y} = ${z}`);
    } else if (pathname == "/userinfo") {
        response.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
        response.end(`userid : ${query.userid} username: ${query.username}`);
    } else {
        response.writeHead(404, { "Content-type": "text/html; charset=utf-8" });
        response.end("<h1>존재하지 않는 url입니다.</h1>");
    }
});

server.listen(4000, () => {
    //4000이 포트번호. 4000에서 기다리는중.
    console.log("server start http://127.0.0.1:4000");
});

//실행된 화면에  [ http://127.0.0.1:4000/?name=Tom&age=17 ] 값 넣어야함
