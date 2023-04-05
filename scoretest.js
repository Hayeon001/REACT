var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("score");
});

//http://127.0.1:3000/ajax/score1
router.get("/score1", function (req, res, next) {
    res.render("ajax/score1");
});

//http://127.0.1:3000/ajax/confirm?kor=100&eng=100&mat=100
router.use("/result", function (req, res, next) {
    var name = req.query.name;
    var kor = parseInt(req.query.kor);
    var eng = parseInt(req.query.eng);
    var mat = parseInt(req.query.mat);
    var sum = kor + eng + mat;
    var avg = sum / 3;

    var result = {
        name: name,
        kor: kor,
        eng: eng,
        mat: mat,
        sum: sum,
        avg: avg,
    };

    res.render("result", { result: result });
});

router.get("/result1", function (req, res, next) {
    //아직 페이지 없음res.render('index', { title: 'Express' });
    res.send("데이터만 보낸다");
});

module.exports = router;
