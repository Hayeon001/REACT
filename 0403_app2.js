var express = require("express");
var app = express(); //서버 만들었음

//문제1//http://127.0.0.1:4000/add?x=45&y=7

//방법1
app.get("/add", (req, res) => {
    let add = {
        x: parseInt(req.query.x),
        y: parseInt(req.query.y),
        z: parseInt(req.query.x) + parseInt(req.query.y),
    };
    res.send(add);
});

//방법2
app.get("/add", (req, res) => {
    (x = parseInt(req.query.x)),
        (y = parseInt(req.query.y)),
        (z = parseInt(req.query.x) + parseInt(req.query.y)),
        res.send({ x: x, y: y, z: z });
});

//문제2//http://127.0.0.1:4000/add/45/7
app.get("/add/:x/:y", (req, res) => {
    console.log(req.params);
    let add = {
        x: parseInt(req.params.x),
        y: parseInt(req.params.y),
        합계: parseInt(req.params.x) + parseInt(req.params.y),
    };
    res.send(add); //send 함수를 이용해서 JSON 데이터 송신
});

app.use((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<H1>Express</H1>");
}); //get 주소 넣고 post로 보내면 express나옴

app.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
});
