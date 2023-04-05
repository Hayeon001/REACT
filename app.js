var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var guestRouter = require("./routes/guestbook"); //모듈을 메모리로 들고들어옴
var ajaxRouter = require("./routes/ajaxtest");
var scoreRouter = require("./routes/score");

var app = express();

// view engine setup //환경변수 설정
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//미들웨어 사용
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//static : image, css, js
//nodejs에서 __(언더바2개)로 시작하는변수나 함수는 내장변수나 함수이다.(노드 만든사람이 만들었다)
//__dirname : 내장변수, 현재 디렉토리 경로를 갖고 있다.
app.use(express.static(path.join(__dirname, "public")));
//path.join : path가 전체 디렉토리 경로에 대한 관리를 도와주고, join은 합친다는 의미
//path.join(__dirname,'public') c:/temp/public형태로 전체 경로를 만들어준다
//자바에서 \(역슬레시) \t 는 텝으로 인식. 경로에 \는 \\2개로 표현  c:\\temp\\public
//초창기에는 경로에 \만 인식했는데, 지금은 / 사용가능능

console.log(__dirname);
console.log(path.join(__dirname, "public"));

app.use("/", indexRouter);
app.use("/users", usersRouter);
//url이 /guestbook으로 시작할경우 guestRouter가 처리한다
app.use("/guestbook", guestRouter);
app.use("/ajax", ajaxRouter); //백그라운드에서 자료를 불러옴. 화면 전체가 바뀌지 않아
app.use("/score", scoreRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;

//npm install nodemon
//nodemon start


