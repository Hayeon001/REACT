var express = require("express");
var fs = require("fs");
var ejs = require("ejs");

var app = express();
app.use(express.urlencoded({ extended: false }));

app.get("/addform", (request, response) => {
    fs.readFile("./html/0404_addform.html", "utf-8", (err, data) => {
        response.writeHead(200, { "Content-type": "text/html" });
        response.end(ejs.render(data));
    });
});

app.get("/add", (request, response) => {
    let x = parseInt(request.query.x);
    let y = parseInt(request.query.y);

    response.send(`${x} + ${y} = ${x + y}`);
});

app.use((request, response) => {
    response.writeHead(200, { "Content-type": "text/html" });
    response.end("<H1>Express</H1>");
});

app.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
});
