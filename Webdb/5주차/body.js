// 모듈 추출
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// 서버 생성
const app = express();
app.use(express.static('public'));
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
// request 이벤트 리스너 설정
app.get('/', (request, response) => {
    // HTML 형식의 문자열을 생성합니다.
    let output = '';
    output += '<form method="post">';
    output += '  <input type="text" name="a" />';
    //text 입력 input창 생성
    output += '  <input type="text" name="b" />';
    //text 입력 input창 생성
    output += '  <input type="submit" />';
    //버튼 클릭시 제출되는 생성
    output += '</form>';
    // 응답합니다.
    response.send(output);
});
app.post('/', (request, response) => {
    // 입력 내용 보여줌
    response.send(request.body);
});
// 서버를 실행합니다.
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});