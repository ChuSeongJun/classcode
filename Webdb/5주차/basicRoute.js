// 모듈 추출
const express = require('express');
// 서버 생성
const app = express();
// request 이벤트 리스너 설정
app.get('/page/:id', (request, response) => {
    // 주소창에 원하는 id 입력할수 있게 꺼냄
    const id = request.params.id;
    // 위 주소창에 {id}칸에 적은 숫자가 화면에 출력
    response.send(`<h1>${id} Page</h1>`);
});
// 서버 실행
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});