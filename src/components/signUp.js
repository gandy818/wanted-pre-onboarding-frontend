import React, { useState } from "react";

function SignUp({onSignUp}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpValid, setSignUpValid] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setpasswordValid] = useState(false);

  const userSignUp = () => {
    onSignUp(email, password)
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
      return setSignUpValid(true)
    } 
    else return setSignUpValid(false)
  }

  return (
    <div className="signupSection">
      <div className="title">회원가입</div>
      <div className="subTitle">아직 회원이 아니시라면- </div>
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
      <div onClick={userSignUp} className={"btn" + (signUpValid ? " isActive" : " notActive")}>회원가입하기</div>
    </div> 
  )
}

export default SignUp;