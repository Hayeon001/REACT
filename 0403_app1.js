var express = require("express");
var app = express(); //서버 만들었음

//express 모듈 자체가 use, get, post 함수가 3개 있음
//use - get, post가 오던
//get - get방식으로 온것만
//post - post방식으로 온것만
// app.use((request, response) => {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.end("<H1>Express</H1>");
// });

// app.listen(4000, () => {
//     console.log("server start http://127.0.0.1:4000");
// });

/////////////////////////////////////////////////////////////////////////

//////user/////
// app.use("/test", (request, response) => {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.end("<H1>Test</H1>");
// });

// //다른 url이 없을 때 처리한다
// app.use((request, response) => {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.end("<H1>Express</H1>");
// });

// app.listen(4000, () => {
//     console.log("server start http://127.0.0.1:4000");
// });

/////////////////////////////////////////////////////////////////////////

// /////get/////
// app.get("/get", (request, response) => {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.end("<H1>Get</H1>");
// });

// /////post/////
// app.post("/post", (request, response) => {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.end("<H1>Post</H1>");
// });

// //다른 url이 없을 때 처리한다
// app.use((request, response) => {
//     response.writeHead(200, { "Content-Type": "text/html" });
//     response.end("<H1>Express</H1>");
// }); //get 주소 넣고 post로 보내면 express나옴

// app.listen(4000, () => {
//     console.log("server start http://127.0.0.1:4000");
// });

/////////////////////////////////////////////////////////////////////////

/////get/////
app.get("/get", (request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<H1>Get</H1>");
});

app.get("/userinfo", (req, res) => {
    let userinfo = {
        name: "Tom",
        phone: "010-1234-1234",
    };
    res.send(userinfo); //send 함수를 이용해서 JSON 데이터 송신
});

//http://127.0.0.1:4000/userinfo2?name=Jane&phone=010-0000-0000
app.get("/userinfo2", (req, res) => {
    //req.query.name;
    let userinfo = {
        name: req.query.name,
        phone: req.query.phone,
    };
    res.send(userinfo); //send 함수를 이용해서 JSON 데이터 송신
});

/////200p 라우팅 /////
//get방식 : 새롭게 추가된 url방식
//get방식이기에 지나치게 큰 데이터는 안됨
//http://127.0.0.1:4000/userinfo3/Brown/user01
app.get("/userinfo3/:username/:userid", (req, res) => {
    //req.query.name;
    console.log(req.params);
    let userinfo = {
        username: req.params.username,
        userid: req.params.userid,
    };
    res.send(userinfo); //send 함수를 이용해서 JSON 데이터 송신
});

/////post/////
app.post("/post", (request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<H1>Post</H1>");
});

//다른 url이 없을 때 처리한다
app.use((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<H1>Express</H1>");
}); //get 주소 넣고 post로 보내면 express나옴

app.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
});
