//scoreserver
//서버8 응용 과제

//ejs
//npm install ejs
//html과 연결하기
let http = require("http");
let fs = require("fs");
let ejs = require("ejs");

let scoreData = [
    { name: "홍길동", kor: 90, eng: 90, mat: 100 },
    { name: "임꺽정", kor: 80, eng: 60, mat: 60 },
    { name: "장길산", kor: 70, eng: 70, mat: 80 },
    { name: "강감찬", kor: 80, eng: 90, mat: 90 },
    { name: "이순신", kor: 100, eng: 100, mat: 100 },
];

scoreData.forEach((data) => {
    data.sum = data.kor + data.eng + data.mat;
    data.avg = data.sum / 3;
});

let server = http.createServer((request, response) => {
    fs.readFile("./html/score.html", "utf-8", (error, data) => {
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
                scoreData: scoreData,
                //키값:데이터값
            })
        );
        //ejs랜더함수 템플릿엔진을 통해 html과 nodejs의 데이터를 결합한다
    });
});

server.listen(4000, () => {
    //4000이 포트번호. 4000에서 기다리는중.
    console.log("server start http://127.0.0.1:4000");
});
