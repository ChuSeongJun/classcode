// 모듈 추출
const express = require('express');
// 서버 생성
const app = express();
// request 이벤트 리스너를 설정합니다.
app.get('*', (request, response) => {
    console.log(request.query);
    //콘솔창에 출력
    response.send(request.query);
    //query를 보여준다.
});
// 서버를 실행
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});

// 'http://127.0.0.1:52273/?a=10&b=20'에 접속해본다.