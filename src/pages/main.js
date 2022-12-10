import React, { useState } from "react";
import axios from "axios"
import "../styled/main.scss"

function Main(){
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPw, setSignInPw] = useState('')
  const [signInValid, setSignInValid] = useState(false);

  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPw, setSignUpPw] = useState('');
  const [signUpValid, setSignUpValid] = useState(false);

  const emailCheck = /\S+@\S/;
  
  const onChangedSignInEmail = (e) => {
    setSignInEmail(e.target.value);
  };

  const onChangedSignInPw = (e) => {
    setSignInPw(e.target.value);
  };

  const onChangedSignUpEmail = (e) => {
    setSignUpEmail(e.target.value);
  };

  const onChangedSignUpPw = (e) => {
    setSignUpPw(e.target.value);
  };

  const Axios = axios.create({
    baseURL: "http://localhost:8000/",
    // baseURL: "https://pre-onboarding-selection-task.shop/",
    headers: {
      "Content-Type": "application/json",
    }
  });

  const signIn = async () => {
   await Axios.post("/auth/signin", {
      signInEmail, signInPw
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  };

  const signUp = () => {
    // axios.post("https://pre-onboarding-selection-task.shop/auth/signup", {
    //   signUpEmail, signUpPw
    // }, {
    //   headers: {
    //     "Content-Type": "application/json",
    //   }
    // }).then((res) => {
    //   console.log(res)
    // }).catch((err) => {
    //   console.log(err)
    // })

    if (signUpValid) {
      Axios.post("/auth/signup", {
        signUpEmail, signUpPw
      }).then((res) => {
        if(res.status === 201) {
          alert("회원가입이 완료되었습니다.")
          setSignUpEmail("")
          setSignUpPw("")
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }

  const CheckSignInValid = () => {
    if(emailCheck.test(signInEmail) === true && signInPw.length >= 8) {
      return setSignInValid(true);
    } else return setSignInValid(false);

  };
  
  const CheckSignUpValid = () => {
    if(emailCheck.test(signUpEmail) === true && signUpPw.length >= 8) {
      return setSignUpValid(true);
    } else return setSignUpValid(false)

  }

  return (
    <div className="main">
      <div className="mainWrapper">
        <div className="signinSection">
          <div className="title">로그인</div>
          <div className="subTitle">회원가입을 하셨다면-</div>
          <div>
            <div>이메일</div>
            <div className="subTitle">이메일에는 @가 반드시 포함되어야 합니다.</div>
            <div><input type="text" value={signInEmail} onChange={onChangedSignInEmail} onKeyUp={CheckSignInValid}></input></div>
          </div>
          <div>
            <div>비밀번호</div>
            <div className="subTitle">비밀번호는 8자 이상이여야합니다.</div>
            <div><input type="password" value={signInPw} onChange={onChangedSignInPw} onKeyUp={CheckSignInValid}></input></div>
          </div>
          <div onClick={signIn} className={"btn" + (signInValid ? " isActive" : " notActive")}>로그인 하기</div>
        </div>
        <div className="signupSection">
          <div className="title">회원가입</div>
          <div className="subTitle">아직 회원이 아니시라면- </div>
          <div>
            <div>이메일</div>
            <div className="subTitle">이메일에는 @가 반드시 포함되어야 합니다.</div>
            <div><input type="text" value={signUpEmail} onChange={onChangedSignUpEmail} onKeyUp={CheckSignUpValid}></input></div>
          </div>
          <div>
            <div>비밀번호</div>
            <div className="subTitle">비밀번호는 8자 이상이여야합니다.</div>
            <div><input type="password" value={signUpPw} onChange={onChangedSignUpPw} onKeyUp={CheckSignUpValid}></input></div>
          </div>
          <div onClick={signUp} className={"btn" + (signUpValid ? " isActive" : " notActive")}>회원가입하기</div>
        </div> 
      </div>
    </div>
  )
}



export default Main;