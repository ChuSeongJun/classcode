// 모듈 추출
const express = require('express');
const fs = require('fs');
// 서버 생성
const app = express();
// request 이벤트 리스너 설정
app.get('/image', (request, response) => {
    fs.readFile('image.png', (error, data) => {
        // 이미지 파일을 읽어옴
        response.type('image/png');
        //타입 설정
        response.send(data);
        //데이터를 불러온다
    });
});
app.get('/audio', (request, response) => {
    fs.readFile('audio.mp3', (error, data) => {
        // 음악 파일을 읽어옴
        response.type('audio/mpeg');
        //타입 설정
        response.send(data);
        //데이터를 불러온다
    });
});
// 서버 실행
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});