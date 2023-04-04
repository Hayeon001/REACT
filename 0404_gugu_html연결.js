var express = require("express");
var fs = require("fs");
var ejs = require("ejs");

var app = express();
app.use(express.urlencoded({ extended: false }));

app.get("/guguform", (request, response) => {
    fs.readFile("./html/0404_guguform.html", "utf-8", (err, data) => {
        response.writeHead(200, { "Content-type": "text/html" });
        response.end(ejs.render(data));
    });
});

app.get("/gugu", (request, response) => {
    let dan = parseInt(request.query.dan);
    let result = "";
    for (i = 1; i <= 9; i++) {
        result += `<p> ${dan} x ${i} = ${dan * i} </p>`;
    }
    response.send(result);
});

///////////////////
// app.get("/gugu", (request, response) => {
//     let dan = parseInt(request.query.dan);
//     response.send(`${dan}단`)
//     for (dan = 1; dan <= 9; dan++){
//         for(i=1,i<=9,i++){
//             response.send(`${dan} x ${i} = ${dan * i}`)
//         }
//     }
// });

app.use((request, response) => {
    response.writeHead(200, { "Content-type": "text/html" });
    response.end("<H1>Express</H1>");
});

app.listen(4000, () => {
    console.log("server start http://127.0.0.1:4000");
});
