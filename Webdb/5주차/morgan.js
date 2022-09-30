// 모듈 추출
const express = require('express');
const morgan = require('morgan');
// 서버 생성
const app = express();
app.use(express.static('public'));
app.use(morgan('combined'));

// request 이벤트 리스너를 설정
app.get('*', (request, response) => {
    response.send('명령 프롬프트를 확인해주세요.');
//    화면에 명령 프롬포트를 확인해주세요 출력
});
// 서버를 실행
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});
