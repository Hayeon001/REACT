//rcc

import React, { Component } from 'react';

class Appclass extends Component {
    //생성자 : props와 state를 사용하고 싶으면 반드시 생성자 사용
    //props : 부모컴포넌트로부터 자식 컴포넌트에 값을 보내기 위한 수단.
    //        단방향 컴포넌트. 자식컴포넌트에서 부모로 값을 보낼 수는 없다.
    constructor(props) {
        super(props);
        //부모생성자를 호출한다.
        //이 코드는 반드시 생성자의 첫번째 위치에 있어야한다. 
        //앞에 다른 코드가 먼저 올 수 없다.

        this.state = {name : "홍길동", age:23, phone: "010-0000-0000"};
        //state객체가 각 컴포넌트마다 있다.
        //이 객체에 json형태의 객체를 저장할 수 있다.
        //개별변수는 태그에서 사용못한다.
    }
    render(){
        const {name, age, phone} = this.state; //this.state에 json객체 저장
        //const name = this.state.name;  //json객체 해체. 귀찮은 방법
        
        const{title, address}= this.props; //destruction . json 해체기능
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h3>이름 : {this.state.name}</h3>
                <h3>나이 : {age}</h3>
                <h3>전화 : {phone}</h3>     {/* 이렇게 써도 됨 */}
                <h3>주소 : {this.props.address}</h3>
                      
            </div>
        );
    }
}

Appclass.propTypes = {

};

export default Appclass;