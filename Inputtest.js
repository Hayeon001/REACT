//rcc

import React, { useState } from 'react';

//props 사용하던말던 기본매개변수로 사용하자
function Inputtest(props){
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");

    //람다함수로 써야함. 일반함수의 경우 생성자에서 바인딩 작업해야함
    const nameChange =(e)=>{
        //인자가 :  발생한 이벤트에 대한 모든 정보
        //console.log(e.target.value); //키를 누른 값이 저장되어있다
        setName(e.target.value)  //name변수의 값이 바뀐다
    }

    const ageChange =(e)=>{
        setAge(e.target.value) 
    }
    const emailChange =(e)=>{
        setEmail(e.target.value)
    }
    let mystyle = {
        color : "white",
        backgroundColor : "blue",
        fontSize : "20px",
        padding : "10px 5px", 
    }
    return(
        <div>
            이름 : <input type="text" onChange={nameChange}
                    style={{color :"blue", backgroundColor : "skyblue"}}/><br/>  
            나이 : <input type="text" onChange={ageChange}
                    style={mystyle}/><br/>
            이메일 : <input type="text" onChange={emailChange}/><br/>
            <p>{name}<br/> {age}<br/> {email}</p>
        </div>
    )
}

export default Inputtest;