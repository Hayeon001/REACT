/*
connenction.execute(sql, [], ()=>{
    connenction.execute(sql, [], ()=>{
        connenction.execute(sql, [], ()=>{
            result.json({result:"success"});
            return;
        })
        res.json({result:"fail"});
        return;
    })
    res.json({result:"fail"});
    return;
});

res.json({result:"fail"});
 
  v
  v
  v

let result = await connection.execute(sql,[]);
if(result == undefined){
    res.json({result:"fail"});
    return;    
}


*/