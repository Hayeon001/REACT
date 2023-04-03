//미들웨어 : 역할을 분담해서 맡은 역할만 처리
//           첫번째 미들웨어 use

var express = require("express");
const { request } = require("http");
var app = express(); //서버 만들었음
//bodyParser모듈이 있는데 모듈을 설치하고 사용할수도 있고
//                        express안에서 자체적으로 미들웨어 거쳐서 알아서 처리
app.use(express.urlencoded({ extended: false })); //첫번째 미들웨어 //app객체 만들고 url처리하기 전에 호출하면 됨

/////post/////
//postman -> post -> http://127.0.0.1:4000/add -> body 탭에서 확인
app.post("/add", (request, response) => {
    let x = request.body.x;
    let y = request.body.y;
    let z = parseInt(x) + parseInt(y);
    response.send({ x: x, y: y, z: z });
});

//다른 url이 없을 때 처리한다
app.use((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<H1>Express</H1>");
}); //get 주소 넣고 post로 보내면 express나옴

app.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
});

////////////
//핵심정리//
////////////

// get방식
// 1. ?x=4&y=5   request.query.x
// 2. /4/5       request.params.x

// post방식
// 미들웨어 설치 선행 필수!
// request.body.x 로 처리
