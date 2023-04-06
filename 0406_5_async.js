// function sigma(limit = 10) {
//     let sum = 0;
//     for (i = 1; i <= limit; i++) {
//       sum += i;
//     }
//     return sum;
//   }
//   console.log(sigma(100));



// async function sigma(limit = 10) {
//     let sum = 0;
//     for (i = 1; i <= limit; i++) {
//       sum += i;
//     }
//     return sum;
//     //async에 의해 무조건 Promise객체로 바뀌어서 전달한다
//   }
//   //console.log(sigma(100));
//     sigma (100)
//     .then ((result)=>{
//         console.log(result);
// })



//console.log(sigma(100));
async function showDisPlay(){
    // sigma (100)
    // .then ((result)=>{
    //     console.log(result);
    // })
let result = await sigma(1000) //기다린다. 반환값이 프라미스 객체가 아니다
console.log(result);
}
showDisPlay();