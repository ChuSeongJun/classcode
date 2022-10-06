// 모듈 추출
const express = require('express');
// 서버 생성
const app = express();
// request 이벤트 리스너를 설정합니다.
app.get('*', (request, response) => {
    response.redirect('http://hanbit.co.kr');
    //서버에 접속하면 'http://hanbit.co.kr' 이 링크로 이동시켜준다
});
// 서버를 실행
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});