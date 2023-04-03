let http = require("http");
let fs = require("fs"); // 파일읽기
let url = require("url"); //url분석을 위한 라이브러리

//http://127.0.0.1:4000?name=Tom&age=17
let server = http.createServer((request, response) => {
    //console.log(request);  //엄청 많이 출력됨
    console.log(request.url); //전송 url
    console.log(request.method); //전송방식

    let rurl = request.url;
    let query = url.parse(rurl, true).query;
    //string 분석 -> json객체로 전환
    //파싱한다
    console.log(query);

    if (query.name != "") {
        response.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
        response.end(`이름 : ${query.name} 나이: ${query.age}`);
    }
});

server.listen(4000, () => {
    //4000이 포트번호. 4000에서 기다리는중.
    console.log("server start http://127.0.0.1:4000");
});

//실행된 화면에  [ http://127.0.0.1:4000/?name=Tom&age=17 ] 값 넣어야함