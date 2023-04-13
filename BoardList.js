import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVERIP } from '../../CommonUtil';
import { Link } from 'react-router-dom';

function BoardList (props){
    const [BoardList, setBoardList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
      async function loadData (){
      const url = SERVERIP+"/hero/list";
      await axios.get(url)
      .then((res)=>{
          setBoardList(res.data);
          setLoading(true);
          console.log(res)
      })
      .catch((error)=>{
          console.log(error);
      })
  }
  loadData();
  }, [])

    return(
        // <div> 게시판 사이즈 이쁘게
        <div className="container">
            <h1>게시판 목록 </h1>
            <h3>http://127.0.0.1:9090/hero/list</h3>
            <div className="input-group mb-3" style={{marginTop:"20px"}}>
                {/* style="margin-top:20px;"  ->  style={{marginTop:"20px"}} 스타일수정*/}
            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
                선택하세요
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">이름</a></li>
              <li><a className="dropdown-item" href="#">업적</a></li>
              <li><a className="dropdown-item" href="#">이름+업적</a></li>
            </ul>
            <input type="text" className="form-control" placeholder="Search"/>
            <button className="btn btn-secondary" type="submit">Go</button>
          </div>

        <table className="table table-hover ">
            <thead className="table-secondary">
              <tr>
                <th>번호</th>
                <th>이름</th>
                <th>업적</th>
              </tr>
            </thead>
            <tbody>
                {
                  loading===true?
                  BoardList.map((item, index)=>{
                    return(
                      <tr key ={index}>
                        <td>{item.id}</td>
                        <td><Link to={"/board/view/"+item.id}>{item.hero_name}</Link></td>
                        <td>{item.hero_desc}</td>
                      </tr>
                    )
                  })
                  :""  
                }
              {/* <tr>
                <td>Mary</td>
                <td>Moe</td>
                <td>mary@example.com</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
              </tr>
              <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
              </tr> */}
           
            </tbody>
          </table>
        
        {/* 글쓰기 버튼생성. button 대신 Link 사용하기 */}
        <div style={{textAlign:"right"}}>
              <Link className="btn btn-primary" to="/board/write">글쓰기</Link>
        </div>
 
        </div>
    );
}

export default BoardList;