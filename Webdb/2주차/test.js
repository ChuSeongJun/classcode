// function test() {
//     second();
//     console.log('첫 번째');
// }
// function second() {
//     third();
//     console.log('두 번째');
// }
// function third() {
//     console.log('세 번째');
// }
// test();
//
// function run() {
//     console.log('3초 후 실행');
// }
// console.log('시작');
// setTimeout(run, 3000);
// console.log('끝');


// let a=10;
// console.log(a);
// a="문자열";
// console.log(a);
// a=true;
// console.log(a);
// a={};
// console.log(a);
// console.log(typeof(a));
// let c;
// console.log(typeof(c));

// if(true){
//     var x=3;
// }
//
// console.log(x);
//
// if(true){
//     const y=3;
// }
// console.log(y);
//
// const num3 = 1;
// const num4 = 2;
// const result2 = 3;
// const string2 = `${num3} 더하기 ${num4}는 '${result2}'`;
// console.log(string2); // 1 더하기 2는 '3'

// var sayNode = function() {
//     console.log('Node');
// };
// var es = 'ES';
// var oldObject = {
//     sayJS: function() {
//         console.log('JS');
//     },
//     sayNode: sayNode,
// };
// oldObject[es + 6] = 'Fantastic';
// oldObject.sayNode(); // Node
// oldObject.sayJS(); // JS
// console.log(oldObject.ES6); // Fantastic

// const newObject = {
//     sayJS() {
//         console.log('JS');
//     },
//     sayNode,
//     [es + 6]: 'Fantastic',
// };
// newObject.sayNode(); // Node
// newObject.sayJS(); // JS
// console.log(newObject.ES6); // Fantastic

// function add1(x, y) {
//     return x + y;
// }
//
// const add2 = (x, y) => {
//     return x + y;
// };
//
// const add3 = (x, y) => x + y;
//
// const add4 = (x, y) => (x + y);
//
// function not1(x) {
//     return !x;

// function 함수(){
//     console.log("함수의 첫 번째 줄");
//     console.log("함수의 두 번째 줄");
// };
//
// 함수();
// console.log(함수);

// const not2 = x => !x;

// let 함수 = () =>{
//     console.log("하ㅏㅁ수의 첫 줄");
// };
// 함수();
// console.log(함수);

// function power(x) {
//     return x*x;
// }
// console.log(power(10));
// console.log(power(20));

// function add1(x, y) {
//     return x + y;
// }
//
// const add2 = (x, y) => {
//     return x + y;
// };
//
// const add3 = (x, y) => x + y;
//
// const add4 = (x, y) => (x + y);
//
// function not1(x) {
//     return !x;
// }
//
// const not2 = x => !x;


// var relationship1 = {
//     name: 'zero',
//     friends: ['nero', 'hero', 'xero'],
//     logFriends: function () {
//         var that = this; // relationship1을 가리키는 this를 that에 저장
//         this.friends.forEach(function (friend) {
//             console.log(that.name, friend);
//         });
//     },
// };
// relationship1.logFriends();
//
// const relationship2 = {
//     name: 'zero',
//     friends: ['nero', 'hero', 'xero'],
//     logFriends() {
//         this.friends.forEach(friend => {
//             console.log(this.name, friend);
//         });
//     },
// };
// relationship2.logFriends();

// (function (){
//     console.log(this);
// })();
//
// (()=>{
//     console.log(this);
// })();


// function 함수() {
//     console.log("두 번째 함수");
// };
//
// 함수 = function () {
//     console.log("첫 번째 함수");
// };
// 함수();

// var candyMachine = {
//     status: {
//         name: 'node',
//         count: 5,
//     },
//     getCandy: function () {
//         this.status.count--;
//         return this.status.count;
//     },
// };
// var getCandy = candyMachine.getCandy;
// var count = candyMachine.status.count;

//구조분해 할당
// var array = ['nodejs', {}, 10, true];
// var node = array[0];
// var obj = array[1];
// var bool = array[3];
//
// const array = ['nodejs', {}, 10, true];
// const [node, obj, , bool] = array;


//클래스 컴포넌트형식
// var Human = function(type) {
//     this.type = type || 'human';
// };
//
// Human.isHuman = function(human) {
//     return human instanceof Human;
// }
//
// Human.prototype.breathe = function() {
//     alert('h-a-a-a-m');
// };
//
// var Zero = function(type, firstName, lastName) {
//     Human.apply(this, arguments);
//     this.firstName = firstName;
//     this.lastName = lastName;
// };
//
// Zero.prototype = Object.create(Human.prototype);
// Zero.prototype.constructor = Zero; // 상속하는 부분
// Zero.prototype.sayName = function() {
//     alert(this.firstName + ' ' + this.lastName);
// };
//
// var oldZero = new Zero('human', 'Zero', 'Cho');
// Human.isHuman(oldZero);
// console.log(Human.isHuman)


//클래스화 한 코드
// class Human {
//     constructor(type = 'human') {
//         this.type = type;
//     }
//
//     static isHuman(human) {
//         return human instanceof Human;
//     }
//
//     breathe() {
//         alert('h-a-a-a-m');
//     }
// }
//
// class Zero extends Human {
//     constructor(type, firstName, lastName) {
//         super(type);
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//
//     sayName() {
//         super.breathe();
//         alert(`${this.firstName} ${this.lastName}`);
//     }
// }
//
// const newZero = new Zero('human', 'Zero', 'Cho');
// Human.isHuman(newZero);
//


//객체 기본
// let product = {
//     제품명: "7D 건조 망고",
//     유형:"당절임",
//     성분:"망고, 설탕, 메타종아황산나트륨, 색소",
//     원산지:"필리핀"
// };
//
// console.log(product.제품명);
// console.log(product.유형);
// console.log(product.성분);
// console.log(product.원산지);
// console.log(product["제품명"]);
// console.log(product["유형"]);
// console.log(product["성분"]);
// console.log(product["원산지"]);

//객체 인자 2개
// let products = [
//     {name: "바나나", price:1200},
//     {name: "사과", price:2200},
//     {name: "맛있는 사과", price:2400},
//     {name: "망고", price:3400},
//     {name: "방울토마토", price:100},
//     {name: "왕수박", price:65400},
// ];
//
// function printProduct(product){
//     console.log(`${product.name}의 가격은 ${product
//         .price}원입니다`);
// }
//
// for(let product of products){
//     printProduct(product);
// }

// 생성자 함수
// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }
//
// let product = new Product("바나나", 1200);
//
// console.log(product);

//프로토 타입추가
// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }
//
// Product.protoType.print =function (){
//     console.log(`${product.name}의 가격은 ${product.price}원입니다.`)
// };
//
// let product = new Product("바나나", 1200);
//
// console.log(product);


//여러개 실행
// function Product(name, price) {
//     this.name = name;
//     this.price = price;
// }
//
// Product.protoType.print =function (){
//     console.log(`${product.name}의 가격은 ${product.price}원입니다.`)
// };
//
// let products =[
//     new Product("바나나", 1200),
//     new Product("사과", 2200),
//     new Product( "맛있는 사과", 2400),
//     new Product( "망고",3400),
//     new Product( "방울토마토",100)
// ];
//
// for(let product of products) {
//     console.log(product)
// };

//"아예 값이 없는 상태"를 구분할 떄 null을 활용

// let zeroNumber = 0;
// let falseBoolean = '';
// let emptyString = '';
// let undefinedValue;
// let nullValue = null;
//
// if (zeroNumber == null)
//     console.log('0은 존재하지 않는 값입니다');
// if (falseBoolean == null)
//     console.log('false는 존재하지 않는 값입니다');
// if (emptyString == null)
//     console.log('빈 문자열은 존재하지 않는 값입니다');
// if (undefinedValue == null)
//     console.log('undefined는 존재하지 않는 값입니다');
// if (nullValue == null)
//     console.log('null은 존재하지 않는 값입니다');



//프로미스
//콜백 헬이라고 불리는 지저분한 자바스크립트 코드 해결책
// const condition = true;
// const promise = new Promise((resolve, reject) => {
//     if (condition) {
//         resolve('성공');
//     }
//     else {
//         reject('실패');
//     }
// });
//
// promise
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log('무조건');
//     });


//then 여러개 사용

// const condition = true;
// const promise = new Promise((resolve, reject) => {
//     if (condition) {
//         resolve('성공');
//     }
//     else {
//         reject('실패');
//     }
// });
//
// promise
//     .then((message) => {
//         return new Promise((resolve, reject) => {
//             resolve(message);
//         });
//     })
//     .then((message2) => {
//         console.log(message2);
//         return new Promise((resolve, reject) => {
//             resolve(message2);
//         });
//     })
//     .then((message3) => {
//         console.log(message3);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// ---------------------------------------


