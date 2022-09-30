// 모듈 추출
const express = require('express');
// 서버 생성
const app = express();
// request 이벤트 리스너 설정
app.get('*', (request, response) => {
    response.status(404);
    //404에러가 뜨면
    response.send('해당 경로에는 아무것도 없습니다.');
//    화면에 해당 경로에는 아무것도 없습니다 출력
});
// 서버를 실행
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});