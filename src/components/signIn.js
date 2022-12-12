import React, { useState } from "react";

function SignIn({onSignIn}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInValid, setSignInValid] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setpasswordValid] = useState(false);

  const userSignIn = () => {
    onSignIn(email, password)
  }

  const onChange = (type, e) => {
    const value = e.target.value

    switch(type) {
      case 'email' : 
        setEmail(value);
        break;
      case 'password' : 
        setPassword(value);
        break;
    }
    checkValid(type, e)
  }
  
  //유효성검사
  const checkValid = (type, e) => {
    const regularEmailCheck = /\S+@\S/;
    const value = e.target.value;

    switch(type) {
      case 'email' : 
        if(regularEmailCheck.test(value) === true){
          setEmailValid(true)
        }
        break;
      case 'password' : 
        if(password.length >= 8) {
          setpasswordValid(true)
        }
        break;
    }
    if(emailValid && passwordValid) {
      return setSignInValid(true)
    } 
    else return setSignInValid(false)
  }

  return (
    <div className="signinSection">
      <div className="title">로그인</div>
      <div className="subTitle">회원가입을 하셨다면-</div>
      <div>
        <div>이메일</div>
        <div className="subTitle">이메일에는 @가 반드시 포함되어야 합니다.</div>
        <div><input type="text" value={email} onChange={(e) => {onChange('email', e)}}></input></div>
      </div>
      <div>
        <div>비밀번호</div>
        <div className="subTitle">비밀번호는 8자 이상이여야합니다.</div>
        <div><input type="password" value={password} onChange={(e) => {onChange('password', e)}}></input></div>
      </div>
      <div onClick={userSignIn} className={"btn" + (signInValid ? " isActive" : " notActive")}>로그인 하기</div>
    </div>
  )
}

export default SignIn;