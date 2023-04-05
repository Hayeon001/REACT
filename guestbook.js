var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    //아직 페이지가 없으니까res.render("guestbook/list");
    res.send("<h1>guestbook</h1>");
});

module.exports = router;
