var express = require("express");
var app = express();
var fs = require("fs");

//http://127.0.0.1:4000/gugu?dan=4
// app.get("/gugu", (req, res) => {
//     x = parseInt(req.query.x),
//     y = parseInt(req.query.y),
//     z = parseInt(req.query.x) * parseInt(req.query.y),
//     res.send(x:x, "*", y:y, "=", z: z);
// });

app.get("/", (request, response) => {
    fs.readFile("html/gugudan.html", "utf-8", (error, data) => {
        response.send(data.toString());
    });
});

app.use((request, response) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<H1>Express</H1>");
}); //get 주소 넣고 post로 보내면 express나옴

app.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
});
