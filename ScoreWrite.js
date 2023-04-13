import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVERIP } from '../../CommonUtil';
import { Link, useNavigate, useParams } from 'react-router-dom';

function ScoreWrite (props){
    let {id} = useParams ();
    let history = useNavigate();

    const [student, setStudent] =useState("");
    const [kor, setKor] =useState("");
    const [eng, setEng] =useState("");
    const [mat, setMat] =useState("");

    useEffect(()=>{
      console.log("id",id);    
      async function loadData(){
        let results = await axios.get(SERVERIP+"/score/view/"+id);
        console.log(results.data.score.student);
        console.log(results.data.score.kor);
        console.log(results.data.score.eng);
        console.log(results.data.score.mat);

        setStudent(results.data.score.student);
        setKor(results.data.score.kor);
        setEng(results.data.score.eng);
        setMat(results.data.score.mat);
      }
      if (id!==undefined) {  //write가 아니고 view로 호출할때
        loadData();
      }
      
    }, [])

    const nameChange=(e)=>{
      setStudent(e.target.value);
    }

    const korChange=(e)=>{
      setKor(e.target.value);
    }

    const engChange=(e)=>{
      setEng(e.target.value);
    }

    const matChange=(e)=>{
      setMat(e.target.value);
    }

    //서버로 전송하기
    const postData =()=>{
      let data={"student":student, "kor":kor, "eng":eng, "mat":mat};
      axios.post(SERVERIP+"/score/write", data)
      .then((res)=>{
        console.log(res.data);
        history("/score/list"); //redirect에 대응
      })
      .catch((error)=>{
        console.log(error);
      })
    }

    return(       
        <div className="container">
          <h1>성적 입력하기</h1>
          <table className="table table-hover " style={{marginTop:"30px"}} >
            
            <colgroup>
                <col width="25%"/>
                <col width="*"/>
            </colgroup>
        
            <tbody style={{verticalAlign:"middle", fontSize:"20px"}}>
              <tr>
                <td >이름</td>
                <td style={{paddingRight:"50px"}}>
                    <div className="mb-3" style={{marginTop:"13px"}}>
                        <input type="text" className="form-control"
                        placeholder="이름을 입력하세요" onChange={nameChange}
                        value={student}/>
                    </div>
                </td>
              </tr>       
              <tr>
                <td>국어</td>
                <td style={{paddingRight:"50px"}}>
                    <div className="mb-3" style={{marginTop:"13px"}}>
                        <input type="text" className="form-control"
                        placeholder="국어 점수를 입력하세요" onChange={korChange}
                        value={kor}/>
                    </div>
                </td>
              </tr>   
              <tr>
                <td>영어</td>
                <td style={{paddingRight:"50px"}}>
                    <div className="mb-3" style={{marginTop:"13px"}}>
                        <input type="text" className="form-control"
                        placeholder="영어 점수를 입력하세요" onChange={engChange}
                        value={eng}/>
                    </div>
                </td>
              </tr>   
              <tr>
                <td>수학</td>
                <td style={{paddingRight:"50px"}}>
                    <div className="mb-3" style={{marginTop:"13px"}}>
                        <input type="text" className="form-control"
                        placeholder="수학 점수를 입력하세요" onChange={matChange}
                        value={mat}/>
                    </div>
                </td>
              </tr>      
              {/* <tr>
                <td>내용</td>
                <td>
                    <div className="mb-3" style={{marginTop:"13px"}}>
                      <textarea className="form-control" rows="5" ></textarea>
                    </div>
                </td>
              </tr>*/}
            </tbody>
            
          </table>
       
          <div className="container mt-3" style={{textAlign:"right"}}>
            <Link className="btn btn-secondary" onClick={postData}>등록</Link>&nbsp;&nbsp;
            <Link className="btn btn-secondary">취소</Link>
          </div>

        </div>
    )
}

export default ScoreWrite;