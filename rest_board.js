
//rest_board.js


let express = require("express");
let router = express.Router();
let commonDB = require("./commonDB");
let commonUtil = require("./commonUtil");

/* GET home page. */
//http://localhost:9090/rest_board/list  ->안됨
//http://localhost:9090/rest_board/list/1  ->가능
router.get("/list/:pg", async function (req, res, next) {
    let pg = parseInt(req.params.pg);

    let sql = `
              SELECT count (*) cnt
                FROM tb_board A
                LEFT OUTER JOIN (SELECT @rownum:=0) B on 1=1
                LEFT OUTER JOIN tb_member C ON A.writer = C.userid
              `;
    let results = await commonDB.mysqlRead(sql, []);
    let totalCnt = results[0]["cnt"];

    sql = `
          SELECT A.id, A.title, A.writer, A.num, A.username, DATE_FORMAT(A.wdate, '%Y-%m-%d') wdate
          FROM 
          (
            SELECT A.id, A.title, A.writer, A.wdate, C.username, @rownum:=@rownum+1 num
            FROM tb_board A
            LEFT OUTER JOIN (SELECT @rownum:=0) B on 1=1
            LEFT OUTER JOIN tb_member C ON A.writer = c.userid
            ORDER BY id DESC
          )A
          LIMIT ${(pg - 1) * 10}, 10;
          `;   //DESC -> ASC하면 1번이 1페이지 옴
    results = await commonDB.mysqlRead(sql, []);
    console.log(results);
    //res.render(
    res.json(
        // "board/board_list", 
        {
        // session: req.session,
        boardList:results,
        totalCnt:totalCnt,
        pg:pg,
        // paging: commonUtil.getPaging(pg, totalCnt), 
    }); 
});  
//    -> 세번 나눠 보낼 수 없음. 하나로 묶어서 보내야함
//  res.render({boardList: results,totalCnt: totalCnt,pg: pg}); 
// 한 함수 내에서 res.join호출하고 다시 res.send나 render나 json 호출 못한다

router.get("/view/:id", async function (req, res, next) {
    let id = req.params.id;
    let sql = `select A.id, A.title, A.writer, DATE_FORMAT(A.wdate, '%Y-%m-%d') wdate,
         (select username from tb_member B where A.writer=B.userid) username
         from tb_board A
         where id =${id}
        `;
   /*
    subquery : select(결과셋이 하나 또는 0일때 가능),
                from: 인라인뷰, where
    빠른 순서 : 조인 > 서브쿼리 > 함수
    nestred loop join  => for문 돌려서 join. 10이전버전
    hash join => 양쪽 테이블의 join컬럼을 기준으로 해쉬테이블을 만들어 조인한닥
                 (엄청빠름)

    선형검색 (n번 비교), 이진검색(데이터가 순서대로 있을 때. 중간에 들어가서 앞인지 뒤인지. 또 절반에 들어가고)
    해쉬검색(제일 빠름)

    서브쿼리: 캐쉬가 된다
   */

    let results = await commonDB.mysqlRead(sql, []);
    if(results.length==0){
      res.json({results:"fail", msg:"해당하는 데이터를 찾을 수 없습니다"});
      return;
    } 
    res.json({results:"success", msg:"", boardData:results[0]});
});


// http://localhost:9090/rest_board/save
// {title:"제목", writer:"test", contents:"내용"}
// 응답성공시 result:"success", msg:"등록성공"
// 응답실패시 result:"fail", msg:"등록실패"
router.post("/write", async function (req, res, next) {
  checkInfos=[
    {key:"title",     type:"str",   range:200},
    {key:"writer",    type:"str",   range:40},
    {key:"contents",  type:"str",   range:-1},  //-1 : 암묵적 룰. 범위체크 열외
  ]

  //수행결과가 0이면 문제없음. 다른숫자가 오면 오류
  insertInfo = commonUtil.checkInfo(req, checkInfos);
  if( insertInfo["result"]!=0){
    res.json(insertInfo);
    return;
  }

  let title = req.body.title;
  let writer = req.body.writer;
  let contents = req.body.contents;
  let sql =`select count (*) cnt from tb_member where userid='${writer}'`;
  results = await commonDB.mysqlRead(sql,[]);

     //키값에는 "results",'', 따옴표 없이 다 가능
  if (results[0]["cnt"]==0){
    res.json({result:"fail", msg:"해당하는 아이디가 없습니다."});
    return;
  }

  sql =`insert into tb_board(title, writer, contents, wdate)
        values('${title}','${writer}','${contents}', now())`;
  await commonDB.mysqlRead(sql,[]);

  res.json({"results":"success", msg:"등록성공"});
});

// router.get("/save", async function (req, res, next) {
//   // let id = req.params.id;
//   let sql = `INSERT INTO tb_board(title, writer, contents, wdate)
//              VALUES(?, ?, ?, NOW());
//             `;

//   let results = await commonDB.mysqlRead(sql, []);
//   if(results.length==0){
//     res.json({results:"fail", msg:"등록실패"});
//     return;
//   } 
//   res.json({results:"success", msg:"등록성공", boardData:results[0]});
// });


module.exports = router;
