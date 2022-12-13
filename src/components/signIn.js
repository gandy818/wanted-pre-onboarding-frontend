import React, { useState } from "react";

function SignIn({ onSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInValid, setSignInValid] = useState(false);

  const userSignIn = () => {
    if (signInValid) {
      onSignIn(email, password);
    }
  };

  const onChange = (type, e) => {
    const value = e.target.value;

    switch (type) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
    }
    checkValid(type, e);
  };

  //유효성검사
  const checkValid = () => {
    const regEmailCheck = /\S+@\S/;
    const keyCode = window.event.keyCode;

    if (regEmailCheck.test(email) === true && password.length >= 8) {
      if (keyCode === 13) {
        userSignIn();
      }
      return setSignInValid(true);
    } else return setSignInValid(false);
  };

  return (
    <div className="signinSection">
      <div className="title">로그인</div>
      <div className="subTitle">이미 회원이시라면-</div>
      <div>
        <div className="label">이메일</div>
        <div>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              onChange("email", e);
            }}
            onKeyUp={checkValid}
          ></input>
        </div>
      </div>
      <div>
        <div className="label">비밀번호</div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              onChange("password", e);
            }}
            onKeyUp={checkValid}
          ></input>
        </div>
      </div>
      <div
        onClick={userSignIn}
        className={"btn" + (signInValid ? " isActive" : " notActive")}
      >
        로그인 하기
      </div>
      {/* <div className="wrongMsg">이메일에는 @가 반드시 포함되어야 합니다.</div> */}
      {/* <div className="wrongMsg">비밀번호는 8자 이상이여야합니다.</div> */}
    </div>
  );
}

export default SignIn;
