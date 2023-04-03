//ejs
//npm install ejs
//html과 연결하기
let http = require("http");
let fs = require("fs");
let ejs = require("ejs");

let server = http.createServer((request, response) => {
    fs.readFile("./html/test.html", "utf-8", (error, data) => {
        //경로가 중요. 파일경로 맞춰야 불러와짐 . .. / ./
        if (error) {
            response.writeHead(500, {
                "Content-type": "text/html; charset=utf-8",
            });
            response.end("error"); //오류상황임
            return;
        }

        response.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
        //response.end(data); //파일 내용을 브라우저로 보낸다 //여기에 ejs함수 추가
        response.end(
            ejs.render(data, {
                name: "Tom", //html name 값을 바꿔치기
                age: 3,
                address: "서울시 성동구 성수동",
                limit: 10,
            })
        );
        //ejs랜더함수 템플릿엔진을 통해 html과 nodejs의 데이터를 결합한다
    });
});

server.listen(4000, () => {
    //4000이 포트번호. 4000에서 기다리는중.
    console.log("server start http://127.0.0.1:4000");
});

// . : 내 위치
// .. : 상위폴더
// /html : root
//./ 쓰거나 빼거나
