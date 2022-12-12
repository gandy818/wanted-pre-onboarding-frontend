import React, { useState } from "react";
import axios from "axios"
import "../styled/main.scss"
import { useNavigate } from "react-router-dom";
import SignIn from "../components/signIn";
import SignUp from "../components/signUp";

function Main(){
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPw, setSignInPw] = useState('')
  const [signInValid, setSignInValid] = useState(false);

  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPw, setSignUpPw] = useState('');
  const [signUpValid, setSignUpValid] = useState(false); 

  const emailCheck = /\S+@\S/;
  const navigate = useNavigate();
  
  

  const Axios = axios.create({
    baseURL: "http://localhost:8000/",
    // baseURL: "https://pre-onboarding-selection-task.shop/",
    headers: {
      "Content-Type": "application/json",
    }
  });

  const signIn = (email, password) => {
    Axios.post("/auth/signin", {
      email, password
    }).then((res) => {
      if(res.status === 200) {
        localStorage.setItem("access_token", res.data.access_token)
        alert("로그인 성공")
        navigate("/todo")
      }

    }).catch((err) => {
      console.log(err)
    })
  };

  const signUp = (email, password) => {
    if (signUpValid) {
      Axios.post("/auth/signup", {
        email, password
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

  return (
    <div className="main">
      <div className="mainWrapper">
        <SignIn onSignIn={signIn}></SignIn>
        <SignUp onSignUp={signUp}></SignUp>
      </div>
    </div>
  )
}

export default Main;