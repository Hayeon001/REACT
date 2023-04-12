import React, { useState } from 'react';

function Hero (props) {
    const [heroList, setHeroList] = useState(
        [
            {id:1, name:"이순신", descr:"임진왜란으로부터 나라를 구함"},
            {id:2, name:"세종대왕", descr:"한글창제"},
            {id:3, name:"강감찬", descr:"귀주대첩"},
            {id:4, name:"홍길동", descr:"율도국 세움"},
        ]
    );

    const [hero, setHero] = useState({name:"", descr:""})
    
    const nameChange=(e)=>{
        let h = hero;//기존값 받아와서 
        // h.id=999;
        h.name =e.target.value;  //새로 바꾸고
        setHero(h); //설정
        //setHero({name:e.target.value});
        // console.log(hero);
    }

    const descrChange=(e)=>{
        let h = hero;
        h.descr =e.target.value;
        setHero(h);
        //setHero({descr:e.target.value});
        // console.log(hero);
    }
    
    const goAppend=(e)=>{
        // console.log(hero);
        // setHero({id:7});

        const lastId = heroList[heroList.length-1].id;
        setHeroList(heroList.concat({...hero, id: lastId + 1}));

        // setHeroList(heroList.concat(hero));
        setHero({name:"", descr:""}) //앞에 추가등록한 정보까지 같이 바꾸는게 아니라 새로추가
        
        // ??? 같은 값은 중복해서 등록 안되고, 동명이인 생성불가
    }

    return (
        <div>
            이름 : <input type="text" onChange={nameChange}></input><br/>
            업적 : <input type="text" onChange={descrChange}></input><br/>
            <button typ="button" onClick={goAppend}>추가</button>
            <br/><br/>
            
            {/* <colgroup>
                <col></col>
            </colgroup> */}
            <table>
                {
                    heroList.map((hero, index)=>{
                        return(  //return 값을 갖는 형태가 map밖에 없음.
                            <tr key={index}>
                                <td>{hero.id}</td>
                                <td>{hero.name}</td>
                                <td>{hero.descr}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )

}


export default Hero;