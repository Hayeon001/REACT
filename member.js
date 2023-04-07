var express = require("express"); //node_modules폴더에 있으면 .생략
var router = express.Router();
let commonDB = require("./commonDB"); //. 나랑 같은 폴더 .. 하나 상위폴더

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("member/member_register", { title: "Express" });
});

//아이디 중복체크
//클라이언트로부터 아이디를 받는다
//받아오 ㄴ아이디를 db에 가서 존재하는지 유무확인
//존재하면 fail 사용자에게 보내주고, 존재하지 않아 사용가능하면 success반환

router.use("/idcheck", async function (req, res, next) {
    let userid = req.body.userid;
    sql = `select count(*) cnt from tb_member where userid='${userid}'`;
    let rows = await commonDB.mysqlRead(sql);
    let cnt = rows[0]["cnt"];
    if (cnt == 0) {
        res.json({ result: "success" });
    } else {
        res.json({ result: "fail" });
    }
    //res.render('member/member_register', { title: 'Express' });
});

//member/save
router.use("/save", async function (req, res, next) {
    let userid = req.body.userid;
    let password = req.body.password;
    let username = req.body.username;
    let nickname = req.body.nickname;
    let email = req.body.email;
    let phone = req.body.phone;
    let zipcode = req.body.zipcode;
    let address1 = req.body.address1;
    let address2 = req.body.address2;
    let sql = `insert into tb_member(userid, password, username, nickname, email, phone, zipcode, address1, address2, wdate) values(?,?,?,?,?,?,?,?,?,now())`;

    try {
        await commonDB.mysqlRead(sql, [
            userid,
            password,
            username,
            nickname,
            email,
            phone,
            zipcode,
            address1,
            address2,
        ]);
        res.json({ result: "success" });
    } catch (e) {
        console.log(e);
        res.json({ result: "fail" });
    }
});

router.get("/login", async function (req, res, next) {
    res.render("member/member_login");
});

///
router.use("/idlogin", async function (req, res, next) {
    let userid = req.body.userid;
    let password = req.body.password;
    let sql = `select userid, password from tb_member where userid='${userid}'and password='${password}'`;
    let result = await commonDB.mysqlRead(sql);
    //let cnt = rows[0]["cnt"];
    console.log(result[0], result[1]);
    if (userid == result[0].userid && password == result[0].password) {
        res.json({ result: "success" });
    } else {
        res.json({ result: "fail" });
    }
    //res.render("member/member_register", { title: "Express" });

    // try {
    //     let result = await commonDB.mysqlRead(sql, [userid, password]);
    //     //console.log("로그인 성공");
    //     res.json({ result: "로그인 성공" });
    // } catch (e) {
    //     console.log(e);
    //     res.json({ result: "아이디 혹은 패스워드를 확인해주세요" });
    // }
});

router.get("/put", async function (req, res, next) {
    let userid = req.query.userid;
    req.session["userid"] = userid;
    console.log(req.session["userid"]);
});

module.exports = router;
