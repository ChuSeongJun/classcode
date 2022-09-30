// 모듈 추출
const express = require('express');
// 서버 생성
const app = express();
app.use(express.static('public'));
//static 미들웨어 사용
//정적 파일 제공
// request 이벤트 리스너 설정
app.get('*', (request, response) => {
    response.send(404);
    response.send('해당 경로에는 아무것도 없습니다.');
});
// 서버를 실행합니다.
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});