var mysql = require("mysql");
var pool = mysql.createPool({
    connectionLimit:10,
    host:"127.0.0.1",
    user:"user01",
    password:"1234",
    database:"mydb",
    port:3306

});

//디비와 연결한다
pool.getConnection((err, connection)=>{
    //디비와 연결을 성공하면 매개변수로 전달된 함수가 호출된다
    //err  - 디비와 연결실패시 처리
    if(err){
        console.log(err);
        return;
    }
    //연결 성공시 연결객체 connection을 전달한다.
    //연결 객체
    console.log("connection success");
    //sql = "select * from tb_board"; //확인

    // sql = `
    //     select id, title, writer, date_format(wdate, '%Y-%m-%d') wdate
    //     from tb_board`;
    //     console.log(rows);

    //insert
    sql = `
        insert into tb_board(title, writer, contents, wdate)
        values(?,?,?,now())`;

    // let params = [ '제목2', '임꺽정', '내용2'];

    //     connection.query(sql, params, (err,rows)=>{
    //         if (err){
    //             console.log("err");
    //         } else {
    //             console.log( "insert 성공");
    //         }
    //         //connection.release(); //연결해제 //여기서 해제하면 난리남
    // });
    // sql = "select * from tb_board"
    // connection.query(sql, params, (err,rows)=>{
    //     if (err){
    //         console.log("rows");
    //     }}); 
    //     //뭐가 더 먼저 끝날지 모르기 때문에 결과가 달라질 수 있음.



    let params = [ '제목2', '임꺽정', '내용2'];

    connection.query(sql, params, (err,rows)=>{
        if (err){
            console.log("err");
        } else {
            console.log( "insert 성공");
                
            sql = "select * from tb_board"
            connection.query(sql, params, (err,rows)=>{
                if (err){
                    console.log("err");
                    console.log("rows");
                };
            });
        }
        });
        //업무처리 순서
        //콜백지옥 
    });
console.log("end");