import React, { useState } from "react";

function SignUp({onSignUp}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpValid, setSignUpValid] = useState('');

  const userSignUp = () => {
    if(signUpValid) {
      onSignUp(email, password)
    }
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
  }

  const checkValid = () => {
    const regEmailCheck = /\S+@\S/;
    const keyCode = window.event.keyCode

    if(regEmailCheck.test(email) === true && password.length >= 8) {
      if(keyCode === 13) {
        userSignUp()
      }
      return setSignUpValid(true);
    } else return setSignUpValid(false);


  };

  return (
    <div className="signupSection">
      <div className="title">회원가입</div>
      <div className="subTitle">아직 회원이 아니시라면- </div>
      <div>
        <div className="label">이메일</div>
        <div><input type="text" value={email} onChange={(e) => {onChange('email', e)}} onKeyUp={checkValid}></input></div>
      </div>
      <div>
        <div className="label">비밀번호</div>
        <div><input type="password" value={password} onChange={(e) => {onChange('password', e)}} onKeyUp={checkValid}></input></div>
      </div>
      <div onClick={userSignUp} className={"btn" + (signUpValid ? " isActive" : " notActive")}>회원가입하기</div>
      {/* <div className="subTitle">이메일에는 @가 반드시 포함되어야 합니다.</div> */}
      {/* <div className="subTitle">비밀번호는 8자 이상이여야합니다.</div> */}
    </div> 
  )
}

export default SignUp;