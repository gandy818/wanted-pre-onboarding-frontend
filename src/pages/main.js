import React, { useEffect } from "react";
import axios from "axios";
import "../styled/main.scss";
import { useNavigate } from "react-router-dom";
import SignIn from "../components/signIn";
import SignUp from "../components/signUp";

function Main() {
  const navigate = useNavigate();

  const Axios = axios.create({
    // baseURL: "http://localhost:8000/",
    baseURL: "https://pre-onboarding-selection-task.shop/",
    headers: {
      "Content-Type": "application/json",
    },
  });

  //토큰이 존재하면 /todo로 리다이렉트
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/todo");
    }
  }, []);

  const signIn = (email, password) => {
    Axios.post("/auth/signin", {
      email,
      password,
    })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("access_token", res.data.access_token);
          alert("로그인 성공");
          navigate("/todo");
        }
      })
      .catch((err) => {
        const statusCode = err.response.data.statusCode;
        if (statusCode === 401) {
          alert("이메일과 비밀번호를 확인해주세요.");
        } else if (statusCode === 404) {
          alert("해당 사용자가 존재하지 않습니다.");
        }
      });
  };

  const signUp = (email, password) => {
    Axios.post("/auth/signup", {
      email,
      password,
    })
      .then((res) => {
        if (res.status === 201) {
          alert("회원가입이 완료되었습니다.");
          window.location.reload();
        }
      })
      .catch((err) => {
        const statusCode = err.response.data.statusCode;
        if (statusCode === 400) {
          alert("동일한 이메일이 존재합니다.");
        }
      });
  };

  return (
    <div className="main">
      <SignIn onSignIn={signIn}></SignIn>
      <SignUp onSignUp={signUp}></SignUp>
    </div>
  );
}

export default Main;
