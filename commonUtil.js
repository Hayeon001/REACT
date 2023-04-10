//routes
function getPaging(pg, totalCnt, pageGroupSize = 10) {
    /*                                            그룹번호
        1  2  3  4  5  6  7  8  9  10    0~9        1  1,10
        11 12 13 14 15 16 17 18 19 20    10~19      2  11,20

        {(1-1)/10}*10 = 0     1-1을 10으로 나눈 나머지에 x10
        {(2-1)/10}*10 = 0
        ...
        {(11-1)/10}*10 =10
        {(21-1)/10}*10 =20


    */
    // 전체 페이지 개수를 확인해보고 어느 그룹에 속하는지 확인해야한다.
    pnTotal = Math.ceil(totalCnt / 10); //전체 페이지 개수
    // 한페이지당 데이터가 10개일때 15건. 올림수 발생시키기. 11건이면 2페이지 발생.
    // 강제올림

    pgGroupStart = parseInt((pg - 1) / pageGroupSize) * pageGroupSize + 1;
    pgGroupEnd = pgGroupStart + 10;
    if (pgGroupEnd > pnTotal) {
        pgGroupEnd = pnTotal + 1;
    }
    console.log(pg, pgGroupStart, pgGroupEnd);
    //함수는 반환값이 하나여야한다. json객체로 만들어 보내자
    return {
        pnTotal: pnTotal,
        pnStart: pgGroupStart,
        pnEnd: pgGroupEnd,
        pg: pg,
    };
}
// for (i = 1; i <= 32; i++) {
//     getPaging(i, 320);
// }

exports.getPaging = getPaging;
