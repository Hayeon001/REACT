var express = require('express');
var router = express.Router();
let commonDB = require('./commonDB')

/* GET home page. */
// http://localhost:9090/score/list
// npm install cors
router.get('/list', async function(req, res, next) {
  let sql=`SELECT A.id, A.student, A.kor, A.eng, A.mat, DATE_FORMAT(A.wdate, '%Y-%m-%d'), wdate  FROM tb_score A;`;
  let results = await commonDB.mysqlRead(sql,[]);
  res.json(results);

});


//write
router.post('/write', async function(req, res, next){
  
  try{
    let student = req.body.student;
    let kor = req.body.kor;
    let eng = req.body.eng;
    let mat = req.body.mat;

    let sql=`
            INSERT INTO tb_score(student, kor, eng, mat, wdate)
            VALUES(?,?,?,?,NOW());
            `;

    await commonDB.mysqlRead(sql, [student, kor, eng, mat]);
    res.json({"result":"success"})
  } catch(e){
    console.log(e);
    res.json({"result":"fail"})
  }
})


//view
// http://localhost:9090/score/view/1
router.get('/view/:id', async function(req, res, next){
  
  try{
    let id = req.params.id;
    let sql=`
            SELECT * FROM tb_score where id=${id}
            `;
    let results = await commonDB.mysqlRead(sql, []);
    res.json({"result":"success", "score":results[0]})
  } catch(e){
    console.log(e);
    res.json({"result":"fail"})
  }
})


//update
router.post('/update', async function(req, res, next){
  
  try{
    let id = req.body.id;
    let student = req.body.student;
    let kor = req.body.kor;
    let eng = req.body.eng;
    let mat = req.body.mat;
    let sql=`
            UPDATE tb_score set student=?, kor=?, eng=?, mat=? where id=?
            VALUES(?,?,?,?,NOW());
            `;
    await commonDB.mysqlRead(sql, [student, kor, eng, mat, id]);
    res.json({"result":"success"})
  } catch(e){
    console.log(e);
    res.json({"result":"fail"})
  }
})



module.exports = router;

//postman test
//localhost:9090/score/write
//post로 보내기. key:value값으로 hero_name, hero_desc 추가해주기