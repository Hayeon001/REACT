/*
          (리엑트)
 프론트 - 화면UI, 디자인
          input 사용자 입력을 받아서 -----------> Axios
                                                  (Ajax라이브러리)
                                                  비동기. 서버로 정보를 주고받는 담당



 백엔드 - nodejs 기반의 express : 디비서버에 붙어서 데이터 읽고 쓰기
 
 프론트가 Axios를 통해 heroList를 요구
  > Axios가 백엔드에게 요청하면 디비서버에서 데이터 읽기
   > 데이터를 json으로 보냄

   프론트 -----------Axios------------- 백엔드
                  (왔다갔다)

*/