// 모듈 추출
const express = require('express');
// 서버 생성
const app = express();
// request 이벤트 리스너를 설정합니다.
app.get('*', (request, response) => {
    response.status(404);
    response.set('methodA', 'ABCDE');
    response.set({
        'methodB1': 'FGHIJ',
        'methodB2': 'KLMNO'
    });
    //set(' ' , ' ' ) set(객체) 형태로 입력
    response.send('내 마음대로 본문을 입력합니다.');
    //화면에 내 마음대로 본문을 입력합니다 출력
});
// 서버를 실행
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});