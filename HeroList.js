//axios 설치필요

import { useState, useEffect } from "react";

//axios 설치
import axios from"axios";


function HeroList(props){
    const [heroList, setHeroList] = useState([]);
    const [loading, setLoading] = useState(false); //데이터를 수신하면 true로 바뀜
    //useState 함수가 값을 초기화해주면 해당 값을 저장할 변수와
    //해당값을 변경하는 함수를 반환함
    //[]-> 배열을 저장할 변수반환, 배열값을 변환할 함수주소

    //첫번째 매개변수 - mount될때, update될때, unmount될때 호출됨
    //[] - 변수들이 바뀔때 호출됨
    // useEffect(()=>{}, []);
    useEffect(()=>{
        //     console.log("나 호출된다");
        //     setHeroList(heroList.concat([
        //         {id:1, name:"이순신", descr:"왜란" },
        //         {id:2, name:"세종대왕", descr:"한글"},
        //         {id:3, name:"을지문덕", descr:"살수"},
        //     ]))
        // }, []);

        //promise 기반 컴포넌트
        axios.get("http://localhost:9090/hero/list")
        .then(
            (res)=>{
                console.log("******");
                console.log(res);
                setHeroList(res.data);
                setLoading(true);
        })
        .catch((res,status, error)=>{
            console.log(status);
        })
    },[]);
        
    return(
        <div>
        <table>
            {
                loading ===true?
                heroList.map((item, index)=>{
                return(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.hero_name}</td>
                        <td>{item.hero_desc}</td>

                    </tr>
                )
            })
            :""
            }
        </table>
        </div>
    )
}

export default HeroList;