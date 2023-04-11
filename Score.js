import React, { useState } from 'react';

function Score(props) {
    const [name, setName] = useState("");
    const [kor, setKor] = useState(0);
    const [eng, setEng] = useState(0);
    const [mat, setMat] = useState(0);
    const [sum, setSum] = useState(0);
    const [avg, setAvg] = useState(0);

    const nameChange =(e)=>{
        setName(e.target.value)
    }

    const korChange =(e)=>{
        setKor(e.target.value)
    }

    const engChange =(e)=>{
        setEng(e.target.value)
    }

    const matChange =(e)=>{
        setMat(e.target.value)
    }

    const count =(e)=>{
        setSum(parseInt(kor)+parseInt(eng)+parseInt(mat)),
        setAvg((parseInt(kor)+parseInt(eng)+parseInt(mat))/3)
    }

    return (
        <div>
            이름 &nbsp;&nbsp; <input type="text" onChange={nameChange}/><br/>
            국어 &nbsp;&nbsp; <input type="text" onChange={korChange}/><br/>
            영어 &nbsp;&nbsp; <input type="text" onChange={engChange}/><br/>
            수학 &nbsp;&nbsp; <input type="text" onChange={matChange}/><br/><br/>
            <button type="button" onClick={count}>결과확인</button><br/>
            <p>{name}의 총점은 {sum}점이고, 평균은 {avg}점입니다.</p>
        </div>
    );
    
}

export default Score;