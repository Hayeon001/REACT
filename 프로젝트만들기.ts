/*
1. 원하는 폴더로 이동 > 프로젝트명 (myhome2) 생성
    C:\react\리엑트\react_workspace> create-react-app myhome2

2. cd 프로젝트명
3. npm install react-router-dom
   npm install bootstrap
   npm install axios

4. index.js 수정
    import { BrowserRouter } from 'react-router-dom';
    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );

5.App.js 라우터 놓기
    import Layout from './layout/Layout.js';
    import Home from './component/Home.js';
    import About from './component/About.js';

    function App() {
    return (
        <div className="App">
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element = {<Home/>}/>
            <Route path="about" element={<About/>}/>
            </Route>
        </Routes>
        </div>
    );
    }

6. Layout.js 만들기

    import 'bootstrap/dist/css/bootstrap.min.css'
    //부트스트랩 라이브러리

    import { Outlet, Link, NavLink} from "react-router-dom";

    //화면구성을 담당할 함수
    function Layout (props) {
        return(
            <div>
                //w3school에서 마음에 드는 navbar css 가져오기
                <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                    ->> ctrl+h 눌러서 [class -> className]으로 바꿔주기
                </nav>

                <Outlet/>
            </div>
        );
    }
            
    export default Layout;

7.component > 새폴더 board > BoardList.js
  필수 import

    import 'bootstrap/dist/css/bootstrap.min.css'
    import React, { useState, useEffect } from 'react';
    import axios from 'axios';

7. BoradList 작성
    import 'bootstrap/dist/css/bootstrap.min.css'
    import React, { useState, useEffect } from 'react';
    import axios from 'axios';

    function BoardList (props){
        return (
            <div>
                <h1>게시판목록</h1>
            </div>
        );
    }
    export default BoardList;

8.






*/