import React, { useState } from 'react';
import axios from 'axios';

function HeroWrite (props) {
    const [hero_name, setHeroName] =useState("");
    //useState 함수가 문자열변수랑 변수값 바꾸는 함수를 만들어서 배열형태로 전달한다.
    const [hero_desc, setHeroDesc] =useState("");

    //input태그에 값이 바뀌면 이 함수가 호출됨
    const heroNameChange=(e)=>{
        setHeroName(e.target.value);        
    }
    const heroDescChange=(e)=>{
        setHeroDesc(e.target.value);        
    }

    //form태그를 이용해서 서버로 전송할때 <button>속성에 type이 없으면
    //버튼 누를 때 submit함수가 호출된다.
    //submit함수가 호출되면 form태그에 onSubmit이벤트핸들러가 호출된다
    //이때 잡아채서 서버에 전송하는 처리를 한다.
    //onSubmit 함수의 경우 무조건 서버로 전송하는데, 이걸 막기위해
    // preventDefault()함수를 호출한다.
    const onSubmit = (e)=>{
        e.preventDefault(); //form태그 통해 서버에 정보를 전송하기 전에 호출됨
                            //버튼의 기본기능을 정지시킨다. 
                            //submit버튼의 submit기능을 막고 별도처리한다.
        axios.post("http://localhost:9090/hero/write",
            {hero_name:hero_name, hero_desc:hero_desc})
            //spring은 데이터를 문자열로 와야 받는다
            //axios는 json으로 데이터를 주고받는다
        .then((res)=>{
            console.log(res.data.result);
            window.location.reload();
            //화면다시불러오기
            //location 객체는 원래 존재하는데 부모가 윈도우
            //react가 아니면 location.reload()만 호출해도 되는데,
            //react는 window.location
        })
        .catch((error)=>{
            console.log(error);
        })
    }                       
        return (
            <div>
                <form onSubmit={onSubmit}>
                <h3>영웅</h3>
                이름 : <input type="text" onChange={heroNameChange}></input><br/>
                업적 : <input type="text" onChange={heroDescChange}></input><br/>    

                <button>추가</button>
                </form>
            </div>
        );

}

export default HeroWrite;