const LoginForm = document.querySelector("#LoginForm");
const loginInput = LoginForm.querySelector("#id");
const passwordInput = LoginForm.querySelector("#password");



let CheckId = /^[a-z]{6,}$/; // 영문 소문자만 + 6자이상
let CheckPassword = /^[A-Za-z0-9]{6,}$/; //영숫자 혼합 + 6자이상

function onSubmit(event) {
  event.preventDefault();
  if(!loginInput.value.match(CheckId)){
    alert("오류: 아이디는 6자 이상 영소문자만 가능합니다.")
  }else{
    alert("성공")
    console.log(passwordInput.value);
  }
  console.log(loginInput.value);
  if(!passwordInput.value.match(CheckPassword)){
    alert("오류: 비밀번호는 6자 이상 숫자와 영문자를 섞어 사용해야합니다.")
  }else{
    alert("성공")
    console.log(passwordInput.value);
  }
}

LoginForm.addEventListener("submit",onSubmit)