var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    //아직 페이지 없음res.render('index', { title: 'Express' });
    res.send("ajaxtest");
});

//http://127.0.1:3000/ajax/ajaxtest1
router.get("/ajaxtest1", function (req, res, next) {
    //아직 페이지 없음res.render('index', { title: 'Express' });
    res.render("ajax/ajaxtest1");
});

//http://127.0.1:3000/ajax/ajaxtest2
router.get("/ajaxtest2", function (req, res, next) {
    //아직 페이지 없음res.render('index', { title: 'Express' });
    res.render("ajax/ajaxtest2");
});

//send 함수가 적당히 알아서 데이터를 보낸다
//http://127.0.1:3000/ajax/add?x=5&y=4
router.use("/add", function (req, res, next) {
    x = parseInt(req.query.x);
    y = parseInt(req.query.y);
    z = x + y;
    res.json({ result: z });
    //res.render("ajax/ajaxtest1");
});

router.get("/result1", function (req, res, next) {
    //아직 페이지 없음res.render('index', { title: 'Express' });
    res.send("데이터만 보낸다");
});

module.exports = router;
